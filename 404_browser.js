var base64HTML = 'PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KPGhlYWQ+CiAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CiAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+CiAgICA8dGl0bGU+NDA0IC0gUGFnZSBOb3QgRm91bmQ8L3RpdGxlPgo8L2hlYWQ+Cjxib2R5PgogICAgPGgxPjQwNCAtIFBhZ2UgTm90IEZvdW5kPC9oMT4KICAgIDxwPlRoZSBwYWdlIHlvdSdyZSBsb29raW5nIGZvciBkb2Vzbid0IGV4aXN0LjwvcD4KICAgIAogICAgPHNjcmlwdD4KICAgICAgICBhbGVydCgnV2VsY29tZSB0byB0aGUgY3VzdG9tIDQwNCBwYWdlIScpOwogICAgPC9zY3JpcHQ+CjwvYm9keT4KPC9odG1sPg==';

        // Function to overwrite the current page with the base64 decoded content
        function loadBase64Page() {
            var decodedHTML = atob(base64HTML); // Decode the base64 string
            document.open(); // Open the document for writing
            document.write(decodedHTML); // Write the decoded HTML to the page
            document.close(); // Close the document to apply changes
        }

        // Load the new 404 page
        loadBase64Page();
