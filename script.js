function getword(info, tab){
	console.log(info.selectionText + " was searched on Jisho");
	chrome.tabs.create({
		url: "http://jisho.org/search/" + info.selectionText,
	});
}
chrome.contextMenus.create({
	title: "Jisho Search",
	contexts:["selection"],
	onclick: getword,
});