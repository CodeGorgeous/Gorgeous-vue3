import { defineComponent, PropType, ref } from "vue";
import { useTouch } from "@/useFunction/useTouch";
import "./index.less";

export default defineComponent({
    name: "GorgeousFloatButton",
    props: {
        // 悬浮按钮的初始Top位置
        top: {
            type: String as PropType<string>,
            default: "90%"
        },
        // 悬浮按钮的初始位置在左侧还是右侧
        position: {
            type: String as PropType<"left" | "right">,
            default: "right"
        },
        // 悬浮按钮的z-index层级
        zIndex: {
            type: Number as PropType<number>,
            default: 100
        },
        // 悬浮按钮是否吸附
        ifAdsorption: {
            type: Boolean as PropType<boolean>,
            default: false
        }
    },
    setup(props, { slots }) {
        const oFloatButtonElement = ref<HTMLDivElement>();
        useTouch({
            root: oFloatButtonElement,
            position: props.position,
            top: props.top,
            ifAdsorption: props.ifAdsorption
        });

        return () => (
            <div
                ref={oFloatButtonElement}
                class={`gorgeous-float-button`}
                style={{
                    zIndex: props.zIndex
                }}
            >
                { slots.default?.() }
            </div>
        )
    }
});