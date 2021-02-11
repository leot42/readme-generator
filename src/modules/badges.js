/*
get  a list of badges from
https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

*/

let licenseData = [
    {
            licenseType: "Apache 2.0 License",
            badgeIcon: "[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)",
            textLocation: "src/assets/license_terms/Apache_2.0_License"
    },
    {
            licenseType: "Boost Software License 1.0",
            badgeIcon: "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
            textLocation: "src/assets/license_terms/Apache_2.0_License"
    },
    {
            licenseType: "BSD 3-Clause License",
            badgeIcon: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)",
            textLocation: ""
    },

    {
            licenseType: "Creative Commons 1.0",
            badgeIcon: "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
            textLocation: ""
    },
    {
            licenseType: "Attribution 4.0 International",
            badgeIcon: "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)",
            textLocation: ""
    },
    {
            licenseType: "Attribution-ShareAlike 4.0 International",
            badgeIcon: "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)",
            textLocation: ""
    },
    {
            licenseType: "Attribution-NonCommercial 4.0 International",
            badgeIcon: "[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)",
            textLocation: ""
    },
    {
            licenseType: "Attribution-NoDerivates 4.0 International",
            badgeIcon: "[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)",
            textLocation: ""
    },
    {
            licenseType: "Attribution-NonCommmercial-ShareAlike 4.0 International",
            badgeIcon: "[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)",
            textLocation: ""
    },
    {
            licenseType: "Attribution-NonCommercial-NoDerivatives 4.0 International",
            badgeIcon: "[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)]",
            textLocation: ""
    },
    {
            licenseType: "Eclipse Public License 1.0",
            badgeIcon: "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
            textLocation: ""
    },
    {
            licenseType: "GNU GPL v3",
            badgeIcon: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
            textLocation: ""
    },
    {
            licenseType: "GNU GPL v2",
            badgeIcon: "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
            textLocation: ""
    },
    {
            licenseType: "GNU AGPL v3",
            badgeIcon: "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
            textLocation: ""
    },
    {
            licenseType: "GNU LGPL v3",
            badgeIcon: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
            textLocation: ""
    },
    {
            licenseType: "GNU FDL v1.3",
            badgeIcon: "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)",
            textLocation: ""
    },
    {
            licenseType: "IBM Public License Version 1.0",
            badgeIcon: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
            textLocation: ""
    },
    {
            licenseType: "ISC License (ISC)",
            badgeIcon: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
            textLocation: ""
    },
    {
            licenseType: "The MIT License",
            badgeIcon: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
            textLocation: ""
    },
    {
            licenseType: "Mozilla Public License 2.0",
            badgeIcon: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
            textLocation: ""
    },
    {
            licenseType: "Attribution License (BY)",
            badgeIcon: "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)",
            textLocation: ""
    },
    {
            licenseType: "Open Database License (ODbL)",
            badgeIcon: "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)",
            textLocation: ""
    },
    {
            licenseType: "Public Domain Dedication and License (PDDL)",
            badgeIcon: "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)",
            textLocation: ""
    },
    {
            licenseType: "The Perl License",
            badgeIcon: "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
            textLocation: ""
    },
    {
            licenseType: "The Artistic License 2.0",
            badgeIcon: "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
            textLocation: ""
    },
    {
            licenseType: "SIL Open Font License 1.1",
            badgeIcon: "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
            textLocation: ""
    },
    {
            licenseType: "The Unlicense",
            badgeIcon: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
            textLocation: ""
    },
    {
            licenseType: "Zlib",
            badgeIcon: "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
            textLocation: ""
    },
    {
            licenseType: "The Do What the Fuck You Want to Public License",
            badgeIcon: "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
            textLocation: ""
    }
]


let testObj = licenseData[5]['licenseType'];

console.log(`known test object ${testObj}`);

// console.log(badgeData.length);

// for (let i = 0; i < badgeData.length; i++) {
//     const element = badgeData[i];
//     console.log(badgeData[i]['licenseType']);

// }
console.log('--should match below--');

licenseData.forEach(element => {
    if (element['licenseType'] === testObj) {console.log(element['licenseType']);}
});

module.exports = licenseData;