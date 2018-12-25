"use strict";
let fs = require("fs");
let utils = Editor.require("packages://cocos-services/panel/utils/utils.js");
var cocosadsVue = Vue.extend({
    template: fs.readFileSync(Editor.remote.App.home + "/services/cocosads/pages/index.html", "utf-8"),
    props: {
        // 从cocos service面板传过来的服务参数(若存在)
        params: {
            type: Object
        }
    },
    data() {
        return {
            paramList: this.params,
            appid: "",
            enableButton: false
        };
    },
    created() {
        // 从传入的参数中读取对应的值，展示到界面中
        if (this.paramList) {
            this.appid = this.paramList.appid ? this.paramList.appid : "";
        }
    },
    watch: {
        // 在每个参数发生变化时，均要对参数值进行检测，以更换参数保存按钮的状态
        appid(curVal, oldVal) {
            if (this.paramList.appid) {
                if (curVal !== this.paramList.appid) this.enableButton = true;
                else this.enableButton = false;
            } else {
                this.enableButton = true;
            }
        }
    },
    methods: {
        utils_t: function (key, ...args) {
            return utils.t(key, ...args);
        },
        handleSaveParamLogic: function () {
            // 保存参数之前一定要对必须参数做判断，确定必要参数没有漏填
            if (!this.appid) {
                utils.printToCreatorConsole("info", this.utils_t("cocosads.miss_param_tips"));
                return;
            }
            var param = {};
            param.appid = this.appid;
            this.paramList = param;
            // 将参数传到 Cocos Service 面板中，并通知面板保存传去的参数
            this.$emit("save-param", this.paramList);
            this.enableButton = false;
        }
    }
});
// 注册Vue组件，组件名由Service后台返回，不可随意命名
Vue.component("service-cocosads", cocosadsVue);
