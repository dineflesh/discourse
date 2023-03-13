import { createWidget } from "discourse/widgets/widget";
import I18n from "I18n";

createWidget("header-bootstrap-mode", {
  tagName: "a.d-header-mode",

  buildAttributes() {
    return {
      href:
        "/t/-/" +
        this.siteSettings.admin_quick_start_topic_id +
        "#bootstrap-mode-2",
    };
  },

  html() {
    return [I18n.t("bootstrap_mode")];
  },
});
