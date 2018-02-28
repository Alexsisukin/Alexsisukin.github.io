<?php
$_POST = [
    /**
     * lead базовый набор который нужен
     */
    'leads' => [
        '1000012' =>
            [
                /** Обязательное */
                'name' => 'Лид вервой воронки',
                'is_id_name' => true, // bool true/false
                'pipeline_id' => '1000012',
                'status_id' => '18498634',
                'responsible_user_id' => '2198434',
                'sale' => '500',
                'custom_fields' => [
                    [
                        'id' => '438407',
                        'values' => [
                            'value' => 'произвольное значение которое надо вписать в crm',
                        ]
                    ]
                ]
            ],
        '1000792' =>
            [
                /** Обязательное */
                'name' => 'lead name',
                'is_id_name' => true, // bool true/false
                'pipeline_id' => '1000792',
                'status_id' => '18505567',
                'responsible_user_id' => '2198434',
                'sale' => '121',
                'custom_fields' => [
                    [
                        'id' => '438407',
                        'values' => [
                            'value' => 'Какойто текст просто проверка',
                        ]
                    ]
                ]
            ]
    ],
    'company' => [
        /** Обязательный */
        'name' => 'Просто имя компании',
        'responsible_user_id' => '2198434',
        'custom_fields' => [
            [
                'id' => '407761',
                'values' => [
                    [
                        'value' => '89604486066',
                        'enum' => '873471'
                    ]
                ]
            ],
            [
                'id' => '407763',
                'values' => [
                    [
                        'value' => 'systut@gmail.com',
                        'enum' => '873483'
                    ]
                ]
            ]
        ]
    ],
    'contact' => [
        'name' => 'Контакт какой-то',
        'responsible_user_id' => '2198434',
        'custom_fields' => [
            [
                'id' => '407761',
                'type' => 'phone',
                'values' => [
                    [
                        'value' => '89604486066',
                        'enum' => '873471'
                    ]
                ]
            ],
            [
                'id' => '407763',
                'type' => 'email',
                'values' => [
                    [
                        'value' => 'systut@gmail.com',
                        'enum' => '873483'
                    ]
                ]
            ]
        ]
    ],
    'task' => [
        'leads' => [
            '1000012' => [
                'element_type' => '2',
                'complete_till_at' => time() + 60 * 60 * 24,
                'task_type' => '1',
                'text' => 'Задача для 1000012',
                'responsible_user_id' => '2198434',
            ],
            '1000792' => [
                'element_type' => '2',
                'complete_till_at' => time() + 60 * 60 * 24,
                'task_type' => '1',
                'text' => 'Задача для 1000792',
                'responsible_user_id' => '2198434',
            ],
        ],
        'contact' =>
            [
                'element_type' => '2',
                'complete_till_at' => time() + 60 * 60 * 24,
                'task_type' => '1',
                'text' => 'Задача для контакта',
                'responsible_user_id' => '2198434',
            ],
        'other' =>
            [
                'element_type' => '2',
                'complete_till_at' => time() + 60 * 60 * 24,
                'task_type' => '1',
                'text' => 'описание задачи',
                'responsible_user_id' => '2198434',
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

        ]
    ]
];
