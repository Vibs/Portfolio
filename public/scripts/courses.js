
const mainContentWrapper = document.getElementById('main-content-wrapper');

/*
<a class="subgroup link flex-center headline" href="/noget">Hej</a>
*/

const path = '/da/courses/'

addSubgroup(mainContentWrapper, 'Java', path + 'java');
addSubgroup(mainContentWrapper, 'Node.js', path + 'nodejs');
addSubgroup(mainContentWrapper, 'Python', path + 'python');
addSubgroup(mainContentWrapper, 'C#', path + 'c-sharp');


