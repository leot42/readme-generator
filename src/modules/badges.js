/*
get  a list of badges from
https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

*/

let badges = {

    "Apache 2.0 License": {
        licenseType: "Apache 2.0 License",
        badgeIcon: "[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)",
        textLocation: "src/assets/license_terms/Apache_2.0_License"
    },

    "Boost Software License 1.0": {
        licenseType: "Apache 2.0 License",
        badgeIcon: "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
        textLocation: "src/assets/license_terms/Apache_2.0_License"
    },

    "BSD 3-Clause License": {
        licenseType: "BSD 3-Clause License",
        badgeIcon: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)",
        textLocation: ""
    },
    "Creative Commons 1.0": {
        licenseType: "Creative Commons 1.0",
        badgeIcon: "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
        textLocation: ""
    },
    "Attribution 4.0 International": {
        licenseType: "Attribution 4.0 International",
        badgeIcon: "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)",
        textLocation: ""
    },
    "Attribution-ShareAlike 4.0 International": {
        licenseType: "Attribution-ShareAlike 4.0 International",
        badgeIcon: "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)",
        textLocation: ""
    },
    "Attribution-NonCommercial 4.0 International": {
        licenseType: "Attribution-NonCommercial 4.0 International",
        badgeIcon: "[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)",
        textLocation: ""
    },
    "Attribution-NoDerivates 4.0 International": {
        licenseType: "Attribution-NoDerivates 4.0 International",
        badgeIcon: "[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)",
        textLocation: ""
    },
    "Attribution-NonCommmercial-ShareAlike 4.0 International": {
        licenseType: "Attribution-NonCommmercial-ShareAlike 4.0 International",
        badgeIcon: "[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)",
        textLocation: ""
    },
    "Attribution-NonCommercial-NoDerivatives 4.0 International": {
        licenseType: "Attribution-NonCommercial-NoDerivatives 4.0 International",
        badgeIcon: "",
        textLocation: ""
    },
    "Eclipse Public License 1.0": {
        licenseType: "Eclipse Public License 1.0",
        badgeIcon: "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
        textLocation: ""
    },
    "GNU GPL v3": {
        licenseType: "GNU GPL v3",
        badgeIcon: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
        textLocation: ""
    },
    "GNU GPL v2": {
        licenseType: "GNU GPL v2",
        badgeIcon: "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
        textLocation: ""
    },
    "GNU AGPL v3": {
        licenseType: "GNU AGPL v3",
        badgeIcon: "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
        textLocation: ""
    },
    "GNU LGPL v3": {
        licenseType: "GNU LGPL v3",
        badgeIcon: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
        textLocation: ""
    },
    "GNU FDL v1.3": {
        licenseType: "",
        badgeIcon: "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)",
        textLocation: ""
    },
    "IBM Public License Version 1.0": {
        licenseType: "IBM Public License Version 1.0",
        badgeIcon: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
        textLocation: ""
    },
    "ISC License (ISC)": {
        licenseType: "ISC License (ISC)",
        badgeIcon: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
        textLocation: ""
    },
    "The MIT License": {
        licenseType: "The MIT License",
        badgeIcon: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        textLocation: ""
    },
    "": {
        licenseType: "",
        badgeIcon: "",
        textLocation: ""
    },
    "Mozilla Public License 2.0": {
        licenseType: "Mozilla Public License 2.0",
        badgeIcon: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
        textLocation: ""
    },
    "Attribution License (BY)": {
        licenseType: "Attribution License (BY)",
        badgeIcon: "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)",
        textLocation: ""
    },
    "Open Database License (ODbL)": {
        licenseType: "Open Database License (ODbL)",
        badgeIcon: "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)",
        textLocation: ""
    },
    "Public Domain Dedication and License (PDDL)": {
        licenseType: "Public Domain Dedication and License (PDDL)",
        badgeIcon: "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)",
        textLocation: ""
    },
    "The Perl License": {
        licenseType: "The Perl License",
        badgeIcon: "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
        textLocation: ""
    },
    "The Artistic License 2.0": {
        licenseType: "The Artistic License 2.0",
        badgeIcon: "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
        textLocation: ""
    },
    "SIL Open Font License 1.1": {
        licenseType: "SIL Open Font License 1.1",
        badgeIcon: "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
        textLocation: ""
    },
    "The Unlicense": {
        licenseType: "The Unlicense",
        badgeIcon: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
        textLocation: ""
    },
    "Zlib": {
        licenseType: "Zlib",
        badgeIcon: "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
        textLocation: ""
    },
    "The Do What the Fuck You Want to Public License": {
        licenseType: "The Do What the Fuck You Want to Public License",
        badgeIcon: "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
        textLocation: ""
    },
}