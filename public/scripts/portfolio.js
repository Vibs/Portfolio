
const mainContentWrapper = document.getElementById('main-content-wrapper');

let allContentGroups;
let latestContentGroup;

/*
<a class="subgroup link flex-center headline" href="/noget">Hej</a>
*/
function addSubgroup(name, link) {
    const newSubgroup = document.createElement('a');
    newSubgroup.classList.add('subgroup', 'link', 'flex-center', 'headline');
    newSubgroup.href = link;
    newSubgroup.innerHTML = name;

    // gets all content-group divs
    allContentGroups = document.getElementsByClassName('content-group');
    // finds latest
    latestContentGroup = allContentGroups[allContentGroups.length -1];
    // gets all subgroup divs in the latest content-group
    const allSubgroups = latestContentGroup.getElementsByClassName('subgroup');

    // if already 3 subgroups in the content-group (because I want 3 pr. line)
    if(allSubgroups.length == 3) {
        console.log('der er 3 subgroups');
        // create new content-group
        latestContentGroup = createContentGroup();
        latestContentGroup.classList.add('flex-left');
        latestContentGroup.appendChild(newSubgroup);
        mainContentWrapper.appendChild(latestContentGroup);
    } else {
        latestContentGroup.appendChild(newSubgroup);
    }

}

addSubgroup('hej1', '/lol');
addSubgroup('hej2', '/lol');
addSubgroup('hej3', '/lol');

addSubgroup('hej4', '/lol');
addSubgroup('hej5', '/lol');
addSubgroup('hej6', '/lol');

addSubgroup('hej7', '/lol');
addSubgroup('hej8', '/lol');