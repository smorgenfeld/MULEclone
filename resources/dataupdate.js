class dataupdate {
  constructor(map=null,prices=null,chat="",ready=false) {
    this.map = map;
    this.prices = prices;
    this.chat = chat;
    this.ready = ready;
  }
  addToChat(chat) {
    this.chat += chat + "\n";
  }
  sendJSON() {
    return {"map":this.map,"prices":this.prices,"chat":this.chat,"ready":this.ready};
  }
}
