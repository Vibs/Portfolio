

function createContentGroupBorder() {
    const border = document.createElement('div');
    border.classList.add('content-group-border');
    return border;
}

function createContentGroup() {
    const divContentGroup = document.createElement('div');
    divContentGroup.classList.add('content-group');
    return divContentGroup;
}

function createHeadline(text) {
    const divHeadline = document.createElement('div');
    divHeadline.classList.add('headline', 'flex-center');
    divHeadline.innerHTML = text;

    return divHeadline;
}

function createText(text) {
    const divText = document.createElement('div');

    divText.classList.add('text-block');
    divText.innerHTML = text;

    return divText;
}


