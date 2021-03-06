const re       = /https:\/\/discord\.gg\//

module.exports = async (invite) => {
    if (!re.test(invite)) {
        return false;
    }

    const code = invite.replace(re, '');
    try {
        await eris.getInvite(code, true);

        return true;
    } catch (e) {
        return false;
    }
};
