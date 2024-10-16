/**
 * @name ThemeSettings
 * @author Kaibi
 * @description Setting for Kaibi's themes
 * @version 0.0.1
 */

module.exports = class ThemeSettings {
    start() {
      BdApi.DOM.addStyle("ThemeSettings", `.app_a01fb1 {
        background-image: url(https://sun23-2.userapi.com/impg/1wlktKqwSOG9j2zVheiUf2wzNKoW1OR6EEqe2Q/vhpKQeqtWrs.jpg?size=2560x1591&quality=96&sign=a607016d93884d3a4403b057aaa46886&type=album)!important;
      }`)

      // BdApi.alert("Hello World!", "This is my first plugin!")
    } 

    stop() {
      BdApi.DOM.addStyle("ThemeSettings")
      // Called when the plugin is deactivated
    }
}