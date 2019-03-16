let Data = {"Title": "", "URL": ""}

chrome.tabs.getSelected(tab=>{
    Data.Title = tab.title;
    Data.URL = tab.url;
    console.log(`Title: ${Data.Title}`);
    console.log(`URL: ${Data.URL}`);
});

window.addEventListener('load',()=>{
    const txtBox = document.querySelector('input');
    document.querySelector('button.ttl').addEventListener('click',()=>{
        txtBox.value = Data.Title;
    });
    document.querySelector('button.url').addEventListener('click',()=>{
        txtBox.value = Data.URL;
    });
    document.querySelector('button.bmark').addEventListener('click',()=>{
        txtBox.value = `[${Data.Title}](${Data.URL})`;
    });

    const cb = new ClipboardJS('button.copy');
    const msgContainer = document.querySelector('div.msg');
    const msgSuccess = document.querySelector('p.copied');
    const msgFailed = document.querySelector('p.failed');
    cb.on("success", function(e){
        console.log('Copied Successfully.', e);
        msgContainer.style.display = "block";
        msgSuccess.style.display = "block";
        setTimeout(()=>{
            msgSuccess.style.display = "none";
            msgContainer.style.display = "none";
        },3000);
    });
    cb.on("error", function(e) {
        console.error('Failed to Copy.', e);
        msgContainer.style.display = "block";
        msgFailed.style.display = "block";
        setTimeout(()=>{
            msgFailed.style.display = "none";
            msgContainer.style.display = "none";
        },3000);
    });
})