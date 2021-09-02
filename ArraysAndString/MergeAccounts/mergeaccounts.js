/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
 export var accountsMerge = function(accounts) {
     [
    ["David", "David0@m.co", "David1@m.co"],
    ["David", "David3@m.co", "David4@m.co"],
    ["David", "David4@m.co", "David5@m.co"],
    ["David", "David2@m.co", "David3@m.co"],
    ["David", "David1@m.co", "David2@m.co"],
]
    // {1:0, 2: 0, 3 :0, 5: 3 }
    const emailToAccountIndex = new Map();
    const mergeGroups = new Map(); // Map of original arrya index to merge destination

    for(let i = 0; i < accounts.length; i++) {
        // accounts[i] = ["John","johnsmith@mail.com","john_newyork@mail.com"]
        for(let j = 1; j < accounts[i].length; j++) {
            const email = accounts[i][j];
            if(emailToAccountIndex.has(email) ) {
                // Setup merge map
                const emailIndex = emailToAccountIndex.get(email);
                if(emailIndex != i) {
                    // This can overwrite if 4 points to 0 and 3
                    mergeGroups.set(i, emailIndex)
                }
            }
            else {
                emailToAccountIndex.set(email, i); // "johnsmit@mail.com" => 0
            }
            // if(mergeGroups.has(i)) {
            //     emailToAccountIndex.set(email, mergeGroups.get(i));
            // }

        }
    }

    // Do merging ...
    console.log(mergeGroups, emailToAccountIndex);
    const emailSets = [];
    for(let i = 0; i < accounts.length; i++) {
        const mappedGroup = getFinalMappedGroup(mergeGroups, i);
        const emailsInI = getEmailsFromAccount(accounts[i]);
        let emailsInMappedAccount = [];
        if(i !== mappedGroup) {
            emailsInMappedAccount = getEmailsFromAccount(accounts[mappedGroup]);
        }
        let currentEmails = emailSets[mappedGroup] ? Array.from(emailSets[mappedGroup]) : [];
        emailSets[mappedGroup] = new Set([...currentEmails, ...emailsInI, ...emailsInMappedAccount])
    }
    // console.log(emailSets);
    const output = [];
    for(let i = 0; i < emailSets.length; i++) {
        if(emailSets[i]) {
            output.push([accounts[i][0], ...Array.from(emailSets[i]).sort()]);
        }
    }
    console.log(output);
    return output;
    // Do formatting and sorting
    // Where is the name ....

};

function getFinalMappedGroup(mergeGroups, group) {
    if(mergeGroups.has(group)) {
        // Follow till there is no mapping ...
        return getFinalMappedGroup(mergeGroups, mergeGroups.get(group));
    }
    else {
        return group;
    }
}

function getEmailsFromAccount(account) {
    let emails = [];
    for (let i = 1; i < account.length; i++) {
        emails.push(account[i]);
    }
    return emails;
}

