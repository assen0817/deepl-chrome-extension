chrome.contextMenus.create({
    title: 'DeepLで翻訳(論文)',
    type: 'normal',
    contexts: ['selection'],
    onclick: (info) => {
        const originalText = info.selectionText.replace(/\. /g, '.\n\n')
        const url = `https://www.deepl.com/translator#en/ja/${encodeURIComponent(originalText)}`
        chrome.tabs.create({ url: url })
    }
})