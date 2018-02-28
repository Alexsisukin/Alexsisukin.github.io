<?php
$row = [
    /**
     * lead базовый набор который нужен
     */
    'lead' => [
        '1000792' =>
            [
                /** Обязательное */
                'name' => 'lead name',
                'is_id_name' => true, // bool true/false
                'pipeline_id' => '1000792',
                'status_id' => '18505567',
                'responsible_user_id' => 'id отвественного юзера',
                'sale' => '121',
                'tags' => 'Передавать массивом теги которые хотят прикреплять к сделки',
                'custom_fields' => [
                    [
                        'id' => '411385',
                        'values' => [
                            'value' => 'произвольное значение которое надо вписать в crm',
                            // 'subtype' => ' судя документации у них там address_line_1 country (как полный список получить не искал еще)'
                        ]
                    ]
                ]
            ],
        '1000793' =>
            [
                /** Обязательное */
                'name' => 'lead name',
                'is_id_name' => true, // bool true/false
                'pipeline_id' => '1000793',
                'status_id' => '18505567',
                'responsible_user_id' => 'id отвественного юзера',
                'sale' => '121',
                'tags' => 'Передавать массивом теги которые хотят прикреплять к сделки',
                'custom_fields' => [
                    [
                        'id' => '411385',
                        'values' => [
                            'value' => 'произвольное значение которое надо вписать в crm',
                            // 'subtype' => ' судя документации у них там address_line_1 country (как полный список получить не искал еще)'
                        ]
                    ]
                ]
            ]
    ],
    'company' => [
        /** Обязательный */
        'name' => 'имя',
        'responsible_user_id' => 'id пользователя ответственного за Компанию',
        'tags' => 'Передавать массивом теги которые хотят прикреплять',

        'custom_fields' => [
            [
                'id' => '407761',
                'values' => [
                    [
                        'value' => '89604486066',
                        //'subtype' => ' судя документации у них там address_line_1 country (как полный список получить не искал еще)',
                        'enum' => '873471'
                    ]
                ]
            ]
        ]
    ],
    'task' => [
        'leads' => [
            '1000792' => [
                'element_type' => '2',
                'complete_till_at' => time() + 60 * 60 * 24,
                'task_type' => '1',
                'text' => 'описание задачи',
                'responsible_user_id' => 'dwdwdw',
            ],
            '1000793' => [
                'element_type' => '2',
                'complete_till_at' => time() + 60 * 60 * 24,
                'task_type' => '1',
                'text' => 'описание задачи',
                'responsible_user_id' => 'dwdwdw',
            ],
        ],
        'contact' =>
            [
                'element_type' => '2',
                'complete_till_at' => time() + 60 * 60 * 24,
                'task_type' => '1',
                'text' => 'описание задачи',
                'responsible_user_id' => 'dwdwdw',
            ],
        'other' =>
            [
                'element_type' => '2',
                'complete_till_at' => time() + 60 * 60 * 24,
                'task_type' => '1',
                'text' => 'описание задачи',
                'responsible_user_id' => 'dwdwdw',
            ]
    ],
    'lists' => [
        [
            'name' => 'имя елемента ',
            'catalog_id' => '3123',
            'custom_fields' => [
                [
                    'id' => '432351',
                    'values' => [
                        [
                            'value' => 'артикуль',
                            'subtype' => ' судя документации у них там address_line_1 country (как полный список получить не искал еще)',
                            'enum' => 'Идентификатор раннее предустановленного варианта выбора для списка или мультисписка'
                        ]
                    ]
                ]
            ]
        ],
        [
            /*...*/
        ]
    ]


];
