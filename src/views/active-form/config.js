export default {
    type: 'form',
    list: [
        {
            show: true,
            label: '姓名',
            prop: 'name', // value / prop
            required: true,
            rule: {
                required: true,
                trigger: 'blur',
                message: '姓名必填'
            },
            placeholder: '请输入姓名'
        },
        {
            show: true,
            label: '年龄',
            prop: 'age',
            required: true,
            rule: {
                required: true,
                trigger: 'change',
                validator: 'handleAgeValid'
            },
            placeholder: '请输入年龄'
        }
    ],
    children: [
        {
            type: 'form',
            name: '健康',
            list: [
                {
                    show: true,
                    label: '身高',
                    prop: 'height'
                },
                {
                    show: true,
                    label: '体重',
                    prop: 'weight',
                    required: false,
                    rule: {
                        required: true,
                        trigger: 'change',
                        validator: 'handleWeightValid'
                    }
                }
            ]
        },
        {
            type: 'form',
            name: '成绩',
            list: [
                {
                    show: true,
                    label: '语文',
                    prop: 'Chinese'
                },
                {
                    show: true,
                    label: '数学',
                    prop: 'Math'
                }
            ]
        }
    ]
}
