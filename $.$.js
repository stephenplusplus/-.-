;(function(win, doc, $){
    var
    replaceText = function () {
        this.innerText = this.innerText.replace(/[s]/gi, '$');
    },
    findText = function () {
        $(this).children().each(replaceText);
    };
    $.fn.$ = $.$ = (function () {
        if (this.nodeType === 9) {
            $.$.call(doc.body);
            return;
        }
        return $(this).each(findText);
    });
})(window, document, jQuery);