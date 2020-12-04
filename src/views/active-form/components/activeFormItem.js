import { hasProp, findItem } from '../util'

export default {
    name: 'ActiveFormItem',

    inject: ['config', 'activeForm'],

    data() {
        return {
            prop: '',
            needRender: true,
            item: {},
            rule: null
        }
    },

    created() {
        // 找到 item 的 prop
        let prop = this.$attrs.prop.split('.')
        this.prop = prop.pop()

        if (!this.prop) {
            this.needRender = false
            return
        }

        // 如果 config 中没有该字段 则返回
        this.needRender = hasProp(this.config, this.prop)
        if (!this.needRender) return

        // 找到 item 对象
        const item = findItem(this.config, this.prop)

        const { rule, required, ...attrs } = item

        if (required) {
            if (rule && rule.validator) {
                rule.validator = this.activeForm[rule.validator]
            }
            this.rule = rule
        }

        this.item = item
    },

    render(h) {
        if (!this.needRender) return null
        return (
            <ElCol span={12}>
                <ElFormItem
                    {...{ attrs: this.$attrs }}
                    rules={this.rule ? { ...this.rule } : null}
                >
                    {this.$scopedSlots.default(this.item)}
                </ElFormItem>
            </ElCol>
        )
    }
}
