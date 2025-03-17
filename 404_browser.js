var base64HTML = 'PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KPGhlYWQ+CiAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CiAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+CiAgICA8dGl0bGU+NDA0IC0gUGFnZSBOb3QgRm91bmQ8L3RpdGxlPgo8L2hlYWQ+Cjxib2R5PgogICAgPGgxPjQwNCAtIFBhZ2UgTm90IEZvdW5kPC9oMT4KICAgIDxwPlRoZSBwYWdlIHlvdSdyZSBsb29raW5nIGZvciBkb2Vzbid0IGV4aXN0LjwvcD4KICAgIAogICAgPHNjcmlwdD4KCjwvc2NyaXB0Pgo8L2JvZHk+CjwvaHRtbD4=';

    function overwritePageWithBase64() {
        try {
            console.log('Decoding base64 content...');
            var decodedHTML = atob(base64HTML);

            console.log('Opening the document...');
            document.open();

            console.log('Writing decoded HTML content...');
            document.write(decodedHTML);

            console.log('Closing the document...');
            document.close();
            console.log('Page successfully overwritten with base64 content.');
        } catch (error) {
            console.error('Error during page overwrite:', error);
        }
    }

    overwritePageWithBase64();
