function createButton(id){
    var ExportAsMarkdownButton;
    ExportAsMarkdownButton = document.createElement('button');
    ExportAsMarkdownButton.innerHTML = 'Markdown';
    ExportAsMarkdownButton.id = "ExportAsMarkdown";
    ExportAsMarkdownButton.style = "background-color: #f44336;border: none;color: white;text-align: center;text-decoration: none;display: inline-block;font-size: 14px;margin: 4px 2px;cursor: pointer;";

    function addExportAsMarkdownButton() {
        if (document.getElementById("ExportAsMarkdown") === null) {
            document.getElementById(id).appendChild(ExportAsMarkdownButton);
            document.querySelector('#ExportAsMarkdown').addEventListener('click', exportAsMarkdown);
        }
    }
    setInterval(addExportAsMarkdownButton, 2000);
}
function exportAsMarkdown(){
    alert("测试成功")
}