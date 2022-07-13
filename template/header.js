function header() {
    return `<!DOCTYPE html>
        <html>

<head>
    <script src="html2.pdf.js"></script>
    <script>
        function generatePDF() {
            const element = document.getElementById('invoice');
            html2pdf().from(element).save();
        }
    </script>
    <link rel="stylesheet" href="pdf.css">
    <title>Or&ccedil;amento</title>

</head>`
};