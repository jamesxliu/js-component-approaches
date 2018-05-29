import Vue from 'vue';
import Layout from './Layout';

// for init from the DOM in a script tag
export const init = ({componentHeading, componentText, el}) => {
    new Vue({
        el: `#${el}`,
        render(h) {
            return h(Layout, {
                props: {
                    componentHeading: componentHeading,
                    componentText: componentText
                }
            })
        }
    })
};

// for importing into another module or entry pt
export default Layout;