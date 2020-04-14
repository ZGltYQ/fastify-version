import AdminAdminsDelete from '../../../../../../lib/use-cases/admin/admins/Delete.mjs';

export default {
    serviceClass : AdminAdminsDelete,
    before       : async (factory) => {
        await factory.standardSetup();
        const admins = await factory.setupAdmins();

        return admins[0].id;
    }
};
