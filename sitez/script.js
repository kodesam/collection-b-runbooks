
        const owner = "kodesam";
        const repo = "collection-i-runbooks";
        const folders = ["python", "ansible", "linux"];

        // Fetch the list of files from the GitHub API
        Promise.all(
            folders.map(folder =>
                fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${folder}`)
                    .then(response => response.json())
                    .then(data =>
                        data.map(file => ({
                            folder: folder,
                            name: file.name,
                            url: file.download_url
                        }))
                    )
            )
        )
            .then(filesPerFolder => {
                // Flatten the file array
                const fileList = filesPerFolder.flat();

                // Render the file list on the web page
                const fileListElement = document.getElementById("file-list");
                fileList.forEach(file => {
                    const fileElement = document.createElement("a");
                    fileElement.href = file.url;
                    fileElement.text = `${file.folder}/${file.name}`;
                    fileElement.target = "_blank";

                    fileListElement.appendChild(fileElement);
                    fileListElement.appendChild(document.createElement("br"));
                });
            })
            .catch(error => console.error("Error fetching file list:", error));
