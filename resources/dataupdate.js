class dataupdate {
  constructor(map=null,prices=null,chat="",ready=null,action=null) {
    this.map = map;
    this.prices = prices;
    this.chat = chat;
    this.ready = ready;
    this.action = action;
  }
  addToChat(chat) {
    this.chat += chat + "\n";
  }
  sendJSON() {
    return {"map":this.map,"prices":this.prices,"chat":this.chat,"ready":this.ready,"action":this.action};
  }
}
