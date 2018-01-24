<?php
$start = '2017-03-01';


function testt1($start, $end)
{
    $start_int = strtotime($start);
    $end_int = strtotime($end);


    $query = "SELECT o.*,DATE_FORMAT(o.dt_pay, '%Y-%m-%d') AS day_pay,
(SELECT u.reg_lang FROM  users u WHERE u.user_id=o.user_id ) AS reg_lang
 FROM user_orders o WHERE  o.status =1 AND billing_type=1 AND o.order_type='tariff' AND DATE_FORMAT(o.dt_pay, '%Y-%m-%d')<=:dt_end
 ORDER BY dt_pay ASC ";


    $sql = DateBase::query($query, [':dt_end' => $end]);

    $rows = $sql->fetchAll(PDO::FETCH_ASSOC);
    $sorts = [];
    foreach ($rows as $i => $row) {

        /** дата начала платяжа timestamp */
        $pay_time = strtotime(date('Y-m-d', strtotime($row['dt_pay'])));
        /** узнаем дату окончания платяжа  timestamp*/
        $end_timestamp = strtotime($row['date_end']);
        /** @var int $day количество дней платяжа */
        $day = ($end_timestamp - $pay_time) / 60 / 60 / 24;
        /** если есть в сортировки значит это повторный платеж */
        if (key_exists($row['calc_id'], $sorts)) {
            /** если оплата входит в интервал когда калькулятор платный то это продление */
            if (
                ($sorts[$row['calc_id']]['start'] <= $pay_time)
                &&
                ($sorts[$row['calc_id']]['end'] >= $pay_time)
            ) {
                /** узнаем сколько осталось дней купили и добавляем их к дате окончания тарифа (ПРОВЕРЕННО) */
                $end_timestamp = $sorts[$row['calc_id']]['end'] + ($day * 60 * 60 * 24);
                $pay_time = $sorts[$row['calc_id']]['start'];

            } else {
                /** если не вошло в интервал когда калк оплачен то это возобновление платяжей
                 * Обновляем время начала оплаты и дату окончания тарифа (дата обновляется сама если это было не продление )
                 */
            }

        } else {
            /** нет в сортировки значить первый платеж */
            /** timestamp первого платяжа */
            $sorts[$row['calc_id']]['first'] = $pay_time;
            /** количество платяжей */
            $sorts[$row['calc_id']]['qty'] = 0;
        }
        /** timestamp когда начал платить */
        $sorts[$row['calc_id']]['start'] = $pay_time;
        /** timestamp когда закончится оплата */
        $sorts[$row['calc_id']]['end'] = $end_timestamp;
        $sorts[$row['calc_id']]['first_d'] = normal_date($sorts[$row['calc_id']]['first']);
        $sorts[$row['calc_id']]['start_d'] = normal_date($sorts[$row['calc_id']]['start']);
        $sorts[$row['calc_id']]['end_d'] = normal_date($sorts[$row['calc_id']]['end']);
        /** увеличиваем оплату на 1 */
        $sorts[$row['calc_id']]['qty']++;

    }
    $calc_pay = 0;
    $new_pay_calc = 0;
    $fail_calc = 0;
    $repeat_calc = 0;
    $test = [];
    /** @var int $end_int прибавляем день для того что бы захватить конец месяца */
    $end_int = $end_int + 60 * 60 * 24;
    foreach ($sorts as $calc_id => $data) {
        /** если дата окнчания тарифа больше интересующего периода значит платный калк */
        if ($data['end'] > $end_int) {
            $calc_pay++;

            /** выявляем первый платеж. если первая оплата входит в интересующий интервал */
            if (
                $start_int <= $data['first'] &&
                $end_int >= $data['first']
            ) {
                $new_pay_calc++;
            }else{
                /** повторные платяжи. если начала платежей входит в интервал но не входит первая оплата в него*/
                if ($data['start']>$start_int && $data['start']<$end_int){
                    $repeat_calc++;
                }
            }

        } else {
            /** если конец оплат больше начала интервала но окончания платяжей меньше  */
            if ($data['end'] > $start_int) {
                /** если окончание тарифа попало в интервал значит это отвал */
                $fail_calc++;
                $test[$calc_id] = $data;
            }
        }
    }


    file_put_contents(ROOT_DIR . '/logs/test_stat_' . $start . '.txt', print_r($test, true));
    file_put_contents(ROOT_DIR . '/logs/test_stat_sort' . $start . '.txt', print_r($sorts, true));
    echo 'Период  c ' . $start . " по  $end \n";
    echo 'Платные калки ' . $calc_pay . "\n";
    echo 'Новые платные калки ' . $new_pay_calc . "\n";
    echo 'Калки которые начали повторно оплачивать ' . $repeat_calc . "\n";
    echo 'Отвалившиеся калки ' . $fail_calc . "\n";
    $tmp = $calc_pay - $new_pay_calc + $fail_calc;
    echo 'платных в прошлом месяце ' . $tmp . "\n";
    echo "\n";

}

function normal_date($timestamp)
{
    return date('Y-m-d H:i:s', $timestamp);
}



for ($i = 1; $i <=2; $i++) {
    $start = date("Y-m-d", strtotime($start . ' +1 month '));
    $end = date("Y-m-t", strtotime($start));
    testt1($start, $end);
}
