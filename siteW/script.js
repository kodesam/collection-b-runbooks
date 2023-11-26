document.addEventListener('DOMContentLoaded', function () {
    const backgroundCode = document.createElement('div');
    backgroundCode.classList.add('background-code');
    document.body.appendChild(backgroundCode);

    const pre = document.createElement('pre');
    pre.textContent = `# RunBook.ai

def automate_runbook():
    # Write your automation logic here
    print("Automating runbook with AI assistance")

automate_runbook()`;

    backgroundCode.appendChild(pre);
});
