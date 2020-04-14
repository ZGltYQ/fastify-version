import AdminsShow from '../../../../../../lib/use-cases/admin/admins/Show.mjs';

export default {
    serviceClass : AdminsShow,
    before       : async (factory) => {
        await factory.standardSetup();
        const admins = await factory.setupAdmins();

        return admins[0].id;
    }
};
