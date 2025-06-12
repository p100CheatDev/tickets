let qrScanner = undefined;

const TIER_NORMAL   = 0;
const TIER_SPONSOR  = 1;
const TIER_PLAYER   = 2;
const TIER_SPEAKER  = 3;
const TIER_CREW     = 4;

const player_tickets = [
    { id: "15b66dd2-8560-473d-ae51-72fbe8b1b32b", tier: TIER_PLAYER },
    { id: "b9fd47aa-e2a5-4b34-951b-914ab1b1b766", tier: TIER_PLAYER },
    { id: "6b0299f1-da21-4ca7-9a60-fff7da5e9406", tier: TIER_PLAYER },
    { id: "de2c6e18-01dc-4cef-aa16-cf4d4e2bb043", tier: TIER_PLAYER },
    { id: "43dd1950-50fa-4732-8cbe-fd94468707e0", tier: TIER_PLAYER },

    { id: "83580db0-5028-4efa-85c9-4a280c03b1cc", tier: TIER_PLAYER },
    { id: "c2dc5a0d-6e05-49fe-82f3-c3010d1911dd", tier: TIER_PLAYER },
    { id: "882149da-e678-41e0-a410-f9b9c51b3f5b", tier: TIER_PLAYER },
    { id: "0d64ba1a-0494-4cc7-b109-b362753abad1", tier: TIER_PLAYER },
    { id: "62593701-c67d-4939-b7da-0503051ec601", tier: TIER_PLAYER },

    { id: "73fcc239-0d93-485b-bf72-eb05e6759fda", tier: TIER_PLAYER },
    { id: "100b1a2a-bacc-4a42-8468-99cc7a759696", tier: TIER_PLAYER },
    { id: "7c774b18-f3df-4e43-ab83-efe16b764297", tier: TIER_PLAYER },
    { id: "96ebd4df-dd4b-460d-9dfc-59a37b22450f", tier: TIER_PLAYER },
    { id: "0113a486-1987-4646-9c8b-e06b46cd39b9", tier: TIER_PLAYER },

    { id: "897aff92-28be-433f-82ed-dac096a94977", tier: TIER_PLAYER },
    { id: "b117fdd6-647e-46da-a0ed-f8b2b7ab47d4", tier: TIER_PLAYER },
    { id: "27108218-765f-4bd0-893e-f6fd57e59c8d", tier: TIER_PLAYER },
    { id: "e9fdabaf-1064-476c-a7c0-cc1ee9d2593a", tier: TIER_PLAYER },
    { id: "9b6b5c57-423b-4a4e-ae0f-53d30864364f", tier: TIER_PLAYER },

    { id: "837cf0e9-cc3b-4092-a416-221ee2ef5fd2", tier: TIER_PLAYER },
    { id: "1ff1af83-5740-4f84-8418-756e0e42d069", tier: TIER_PLAYER },
    { id: "fde5a1ff-f4c9-4bb2-aa6d-23fdf8d15c6b", tier: TIER_PLAYER },
    { id: "c56481f0-34d6-4aa5-ac3a-4b02346a41cb", tier: TIER_PLAYER },
    { id: "86b1d4b7-91e9-4338-b1fc-3fff809a8e77", tier: TIER_PLAYER },

    { id: "30d10a00-00ce-489b-a3f9-eb7f9b495850", tier: TIER_PLAYER },
    { id: "ef4cb3ba-94f0-45f8-9e22-68b321063866", tier: TIER_PLAYER },
    { id: "92e36d57-30d3-4dd0-8754-816a5f4eec54", tier: TIER_PLAYER },
    { id: "dc68b0e8-704a-482d-af2b-43c71ebb991b", tier: TIER_PLAYER },
    { id: "7ae56ea4-9690-46d3-b61f-12300e4bc7b7", tier: TIER_PLAYER },

    { id: "3490ad9d-90a5-4ab7-8fe4-e934279760f0", tier: TIER_PLAYER },
    { id: "bf8e34cc-aacc-4703-9dcb-80ff388f3dc3", tier: TIER_PLAYER },
    { id: "48838236-9152-45ee-9904-0d50380e4650", tier: TIER_PLAYER },
    { id: "5a55f470-6214-484c-a2c5-e35387f7a84f", tier: TIER_PLAYER },
    { id: "e41c8379-fad8-4043-a36b-5d4f57546009", tier: TIER_PLAYER },

    { id: "58766854-cee5-4984-9768-3e0099e3756c", tier: TIER_PLAYER },
    { id: "021bc08b-2a82-4027-9f0e-4106443351a9", tier: TIER_PLAYER },
    { id: "31c36589-e3d3-475f-8423-0a8cc8c6501a", tier: TIER_PLAYER },
    { id: "636121ae-1fd9-4b3b-a6ab-7ffc15117082", tier: TIER_PLAYER },
    { id: "0fdf0ca0-bdb4-4bb6-95f0-02d00dd95af0", tier: TIER_PLAYER },

    { id: "ca6aa60a-834b-4ce8-b95b-4d10515b4f0a", tier: TIER_PLAYER },
    { id: "b95b3d21-8de0-454a-82a4-0a3c401f9cad", tier: TIER_PLAYER },
    { id: "588428c5-f463-4949-ba8c-af8bd9408f49", tier: TIER_PLAYER },
    { id: "ae9bfdd9-80f5-4592-bdc8-3a8f68aab013", tier: TIER_PLAYER },
    { id: "9aef7650-fe11-44b6-949d-8dce0c55dc11", tier: TIER_PLAYER },

    { id: "ea88a020-2bbc-41f8-b1d0-da3fc7de5844", tier: TIER_PLAYER },
    { id: "d751631c-4bb5-490b-bc0d-1402bcca68d4", tier: TIER_PLAYER },
    { id: "f25f0acb-021b-441e-975f-44d3d940e2d0", tier: TIER_PLAYER },
    { id: "54aea095-40e3-4a82-82e0-74258eca716e", tier: TIER_PLAYER },
    { id: "f969568e-5e8c-4e8d-8faf-0f277b092df4", tier: TIER_PLAYER },
]
const sponsor_tickets = [
    { id: "836764ff-78e9-4855-8509-c5b4ebcaeeab", tier: TIER_SPONSOR },
    { id: "81350065-02c8-4a0b-8231-aea64f0b7dc0", tier: TIER_SPONSOR },
    { id: "4c86ad74-1c74-47fd-9e3a-0ff2f0007685", tier: TIER_SPONSOR },
    { id: "2ba64a71-fcb3-4aeb-9a33-83d6d93c9b02", tier: TIER_SPONSOR },
    { id: "c48216d9-b842-4129-a2ec-6f1bc7d2dba4", tier: TIER_SPONSOR },
    { id: "fddf4ff1-29f7-437b-a349-32c1a4794da4", tier: TIER_SPONSOR },
    { id: "0e582c79-d279-4f77-bb0c-f6a4f5fb9059", tier: TIER_SPONSOR },
    { id: "34fecdc4-4e77-4858-a361-7763b1f53d0c", tier: TIER_SPONSOR },
    { id: "af30dfbc-08a5-4d21-9320-bd40eb5c2129", tier: TIER_SPONSOR },
    { id: "87eb8911-b5a4-4daa-a1a6-811c5ca3eb0e", tier: TIER_SPONSOR },
    { id: "1b9ea7c2-8e3d-4f10-84f5-e750e2642696", tier: TIER_SPONSOR },

    { id: "430c53bd-1853-4969-b167-9ec9fad27f63", tier: TIER_SPONSOR },
    { id: "087c090f-9c08-402f-bad6-332cbfa85639", tier: TIER_SPONSOR },
    { id: "0bc7cd47-b55b-4f6b-b771-7a60cbfe339f", tier: TIER_SPONSOR },
    { id: "842b93aa-2222-405f-ae40-08418e9f9cc4", tier: TIER_SPONSOR }
]
const speaker_tickets = [
    { id: "32fbe245-b9f9-4088-abcd-20cdcb3c584f", tier: TIER_SPEAKER },
    { id: "4b03a69f-f87d-4ee9-8c4b-ae1e7d1c8d82", tier: TIER_SPEAKER },
    { id: "c96b5220-621d-4b5e-afc1-e5f3ea69b28f", tier: TIER_SPEAKER },
    { id: "3760dc18-1d6b-4496-9e8a-6d3519f75346", tier: TIER_SPEAKER },
    { id: "d075cc15-ad22-46c6-93a1-5df42d8d0529", tier: TIER_SPEAKER },
    { id: "8b56568a-a9db-4cb3-bf77-f62d72ab8a1b", tier: TIER_SPEAKER },
    { id: "c14e2e15-6d4d-45bd-b18c-5926e6229ffa", tier: TIER_SPEAKER },
    { id: "a9e35368-ac40-4cfe-bed7-d89a9896b5c8", tier: TIER_SPEAKER },
    { id: "42b19556-607a-47be-a936-f28588a62e22", tier: TIER_SPEAKER },
    { id: "4b2e2151-3c8f-4e80-9c20-2568158d0485", tier: TIER_SPEAKER },
    { id: "11901dad-3a26-4a8b-8bdf-4b188be5f829", tier: TIER_SPEAKER },
    { id: "612f24ce-bd05-47fd-aee5-422c1a3647c8", tier: TIER_SPEAKER },
    { id: "57d82a05-4195-4fb4-b433-58a86d2cc1d7", tier: TIER_SPEAKER },
    { id: "11e0d543-b7c6-4b8e-beef-c1f39f2f2cb8", tier: TIER_SPEAKER },
    { id: "70a1ec03-4542-424f-867e-39a392b66fc1", tier: TIER_SPEAKER },
    { id: "3e63b981-a9ee-479a-830c-d5684ac074bd", tier: TIER_SPEAKER },
    { id: "cf49b935-5a18-478f-ba2c-dca5cefebfc7", tier: TIER_SPEAKER },
    { id: "5e2a1fd5-42c6-49de-84ab-f12c14ddbd2f", tier: TIER_SPEAKER },
    { id: "c213a21f-9355-45e6-ab54-86f27044cfe3", tier: TIER_SPEAKER },

    { id: "dd1508e3-9fcd-4b2c-9591-81fbcee5550c", tier: TIER_SPEAKER }
];
const normal_tickets = [
    { id: "0e3a7c93-ea29-49a6-a3e4-676e69858bb4", tier: TIER_NORMAL },
    { id: "4afb4335-ef45-401e-a0a3-ea16ea603aad", tier: TIER_NORMAL },
    { id: "35ab5e8d-e224-4b30-a700-04ebad62e01b", tier: TIER_NORMAL },
    { id: "555a38df-0a1b-4d7e-912a-2bc135076e4d", tier: TIER_NORMAL },
    { id: "416734e5-c959-4e63-98dc-b8390c40e4e9", tier: TIER_NORMAL },
    { id: "f3f327d5-8ea7-4d4d-b0b0-68857b680e1e", tier: TIER_NORMAL },
    { id: "ff961a6b-261a-46ad-9145-eee76e206772", tier: TIER_NORMAL },
    { id: "1d0233c6-0c87-4488-a29f-1c8a650f002d", tier: TIER_NORMAL },
    { id: "1eaaff0a-b793-40bc-a599-649a7dfe5bac", tier: TIER_NORMAL },
    { id: "f061c3ab-320d-464a-97c5-0f485c0e49fa", tier: TIER_NORMAL },
    { id: "76f17d64-40d4-429e-8951-bcc64ded50e4", tier: TIER_NORMAL },
    { id: "8393f358-195b-4457-a6c4-ef9f7776b087", tier: TIER_NORMAL },
    { id: "617ce07c-704d-472e-b8e1-a1a7b131a295", tier: TIER_NORMAL },
    { id: "6a8d1957-de43-4d36-ab08-87a8e306d673", tier: TIER_NORMAL },
    { id: "12ab1f40-72aa-456b-a864-0f519070c3e7", tier: TIER_NORMAL },
    { id: "73d4d158-1f2e-4dfe-b25f-b99c0e8f8fe5", tier: TIER_NORMAL },
    { id: "ec4737ee-69f3-444f-a6a2-a520b3734347", tier: TIER_NORMAL },
    { id: "254f2b98-af5d-4c5d-904b-4edb8975f933", tier: TIER_NORMAL },
    { id: "9331f59d-b016-43c5-a0ea-24327f2e9d17", tier: TIER_NORMAL },
    { id: "f2752993-ca52-4ec6-86da-3895bd7f5dea", tier: TIER_NORMAL },
    { id: "2a32b97c-7137-46a4-929b-0ff387e8db73", tier: TIER_NORMAL },
    { id: "fc5e4231-535c-41b8-9ccb-b33d68553452", tier: TIER_NORMAL },
    { id: "3248fd58-5dfe-4ef7-b007-a86503ce3aeb", tier: TIER_NORMAL },
    { id: "f9264673-7ad7-4bb1-8fd1-4a2b928e1292", tier: TIER_NORMAL },
    { id: "d6446a25-f884-494f-a782-b97f22e6368e", tier: TIER_NORMAL },
    { id: "1956eebd-33d1-456f-9ac4-2fff1fb9eb16", tier: TIER_NORMAL },
    { id: "51de0200-3d8e-428e-8953-89992ae007b0", tier: TIER_NORMAL },
    { id: "acc41471-3a1e-4e92-b1f8-54114ca8bb49", tier: TIER_NORMAL },
    { id: "f9f8830a-1c70-4d5f-b986-f9ca90613c46", tier: TIER_NORMAL },
    { id: "8f3444d7-e840-4f0e-a8c9-afd9dcb58bad", tier: TIER_NORMAL },
    { id: "8bc735c4-3b73-43cb-b747-1ffd9c3830bd", tier: TIER_NORMAL },
    { id: "fc0da1c2-1cbe-4c11-947e-70f769b7d54d", tier: TIER_NORMAL },
    { id: "65358032-c972-4f52-a40f-5006ca33ef6a", tier: TIER_NORMAL },
    { id: "4dfb700c-a00d-4a26-be3f-5184649d9811", tier: TIER_NORMAL },
    { id: "bd92c8b4-af9e-412e-a65c-17a5d74a5f58", tier: TIER_NORMAL },
    { id: "d2d7d7ed-4f9d-4810-8312-4df5e98c57e5", tier: TIER_NORMAL },
    { id: "1bf8f74b-37b9-4760-bd14-4dcde83a03d3", tier: TIER_NORMAL },
    { id: "704f29ea-25af-49f4-80d1-b33a6d66f2f6", tier: TIER_NORMAL },
    { id: "ca2d2a6c-c536-4468-93b7-a89a80af8cd6", tier: TIER_NORMAL },
    { id: "e99dcce6-c869-4466-bb24-f290c5a3cf3e", tier: TIER_NORMAL },
    { id: "c9ad7a99-ce71-46f6-96cc-8c7c9084d637", tier: TIER_NORMAL },
    { id: "95a5d56a-5ac5-4517-98c7-872113bb6b85", tier: TIER_NORMAL },
    { id: "bc0f73d0-5963-4453-a288-7d686c8f7668", tier: TIER_NORMAL },
    { id: "d8494711-1c91-44a3-ae56-036efcc635ed", tier: TIER_NORMAL },
    { id: "a49cdfd5-bb71-40a8-9c6e-f095e357d24d", tier: TIER_NORMAL },
    { id: "b50ebac4-30e2-46d5-9cec-3f74c08b530c", tier: TIER_NORMAL },
    { id: "ea1ac885-575a-464f-892c-199c55d140d7", tier: TIER_NORMAL },
    { id: "d384191d-5fb6-4129-8b6b-1d7f7e18a353", tier: TIER_NORMAL },
    { id: "4e4b01a1-fd17-4ced-a244-042849fdc4f5", tier: TIER_NORMAL },
    { id: "6f770c35-d471-4645-9f0c-eaf5a6f01bb9", tier: TIER_NORMAL },
    { id: "4b161fe2-1156-4235-ab97-c0f7e4217c70", tier: TIER_NORMAL },
    { id: "0b0b0a42-4129-472f-b6df-f74a0a86228f", tier: TIER_NORMAL },
    { id: "2b3061e8-569f-46a1-a42b-f58bd06c2450", tier: TIER_NORMAL },
    { id: "2a35c547-5ee8-4afa-bd40-da032316d206", tier: TIER_NORMAL },
    { id: "e530dfac-bdad-44b1-9cca-9da9dcd5ef66", tier: TIER_NORMAL },
    { id: "e805f18c-c3cc-40a5-b6ca-49590282a480", tier: TIER_NORMAL },
    { id: "98f2e6ae-b24e-4fbf-9b92-da3082fabe80", tier: TIER_NORMAL },
    { id: "8fbd4a9a-fefc-4483-84d5-168cca6cd862", tier: TIER_NORMAL },
    { id: "491d6905-7a01-4919-8b28-e14cb5c4a651", tier: TIER_NORMAL },
    { id: "282056e2-fabc-4b8a-85aa-05fe1b322f6f", tier: TIER_NORMAL },
    { id: "bb1f36e4-f8a5-4cb6-b1f5-8d4110937e0c", tier: TIER_NORMAL },
    { id: "ae6ea608-e163-42c4-b8de-8a6d4a1a3df9", tier: TIER_NORMAL },
    { id: "ac53d8ea-30b4-45b5-aa1e-6d8f9505df2f", tier: TIER_NORMAL },
    { id: "8899513b-3384-4d4e-b473-9f9f51262f03", tier: TIER_NORMAL },
    { id: "f6cac31f-79b3-4785-bc90-3cfc8cc84178", tier: TIER_NORMAL },
    { id: "8bdb1de7-51e3-48b3-9615-9ea63b2c29d5", tier: TIER_NORMAL },
    { id: "077fdef9-7659-4f4b-86ac-77248811ea0d", tier: TIER_NORMAL },
    { id: "85d3dcd6-9f0a-47a8-b34c-6c10a1bc81a6", tier: TIER_NORMAL },
    { id: "989c1723-6968-470d-a15c-9d8c24803f74", tier: TIER_NORMAL },
    { id: "4116a2be-cb0e-4dec-9239-da96259e4b07", tier: TIER_NORMAL },
    { id: "339a076f-d1a9-4771-96de-178e1e99b336", tier: TIER_NORMAL },
    { id: "430402c6-bef9-4188-8534-ca886898e02a", tier: TIER_NORMAL },
    { id: "04ba93bb-ef7a-432c-a4c5-02e3c7e2a3ee", tier: TIER_NORMAL },
    { id: "382b41e6-49e5-43d7-840a-c404f179b551", tier: TIER_NORMAL },
    { id: "2c3680a3-1ecd-49e3-998f-6e875dcfde42", tier: TIER_NORMAL },
    { id: "be7bdb4e-f170-4db3-9be1-db6eea8b771f", tier: TIER_NORMAL },
    { id: "dfc158a2-ea6e-4510-a37a-b48ee725859e", tier: TIER_NORMAL },
    { id: "5aa63222-3bef-48e9-9cac-ba616fee5a65", tier: TIER_NORMAL },
    { id: "12b7b977-4d23-4c22-b386-2a72c144a7b7", tier: TIER_NORMAL },
    { id: "8b302402-5f32-4c4b-96b0-f5130642dbbf", tier: TIER_NORMAL },
    { id: "1dfe990b-3424-45c2-8839-ca65e84cd358", tier: TIER_NORMAL },
    { id: "21169d75-033a-4706-9d62-298737b16ec0", tier: TIER_NORMAL },
    { id: "3a4d5f3c-8d24-4bcd-8f74-fe8e76ff0593", tier: TIER_NORMAL },
    { id: "49ba9453-f673-42c6-9ceb-39f2d24c50e8", tier: TIER_NORMAL },
    { id: "3f0d8e88-913b-4c4c-96dc-ae05b43bc184", tier: TIER_NORMAL },
    { id: "282cef0b-4ab5-48d2-8f5f-6b3a5c823702", tier: TIER_NORMAL },
    { id: "75717b5c-f69d-4a5f-951b-c511252174d0", tier: TIER_NORMAL },
    { id: "e1535c14-448f-41bc-8f41-514ab5b81257", tier: TIER_NORMAL },
    { id: "529294ad-70e3-4a0c-aeb4-cd285ea081ae", tier: TIER_NORMAL },
    { id: "9a8e19bf-72dc-4a79-82d2-08266e43a697", tier: TIER_NORMAL },
    { id: "adc0d029-2ee5-469e-bd3d-7cc7869395e6", tier: TIER_NORMAL },
    { id: "b18d0818-6d91-4b51-a259-1fb251f80024", tier: TIER_NORMAL },
    { id: "08e67fff-eb7b-4557-aec7-84e393c378aa", tier: TIER_NORMAL },
    { id: "da02928e-da7e-4db5-a1dc-3b29500a913e", tier: TIER_NORMAL },
    { id: "87b50b13-b336-4ad4-8367-f246a2391d0a", tier: TIER_NORMAL },
    { id: "70233fb0-c0bf-4822-9575-058e611f3b1d", tier: TIER_NORMAL },
    { id: "1c8e3bd8-b219-4f35-89bc-e8ae9314a10f", tier: TIER_NORMAL },
    { id: "6b819067-7f79-47b2-9525-7bc6989ae2b1", tier: TIER_NORMAL },
    { id: "e58ba008-c800-48e2-8c9e-4650ae2c8b5e", tier: TIER_NORMAL },
    { id: "becae50e-7669-459e-8b54-8052291744f7", tier: TIER_NORMAL },
    { id: "6fc35486-79df-4868-aa95-0b55264b882c", tier: TIER_NORMAL },
    { id: "f16e8119-20e5-4d6e-b2b1-91e112a5bc4d", tier: TIER_NORMAL },
    { id: "577574b0-4f83-4444-a7e5-59ca54897f8b", tier: TIER_NORMAL },
    { id: "a95703a4-1d5d-4900-a064-03ba2175c49b", tier: TIER_NORMAL },
    { id: "cb27d058-2a3e-4bbf-b1e8-412ebfefdcb2", tier: TIER_NORMAL },
    { id: "d34cd05f-0414-450b-965e-ee33bb828460", tier: TIER_NORMAL },
    { id: "2fbc1685-0b28-49c0-87a3-1e8c8b2951c9", tier: TIER_NORMAL },
    { id: "c7415116-b26d-4130-bac9-825eff0e8b49", tier: TIER_NORMAL },
    { id: "f72024fc-00ac-42b3-9613-4cd361e1ea78", tier: TIER_NORMAL },
    { id: "59ea9118-4947-4f1e-a1e3-b1c95bdd5ec6", tier: TIER_NORMAL },
    { id: "a773008b-499f-4060-8698-46f29c0daa95", tier: TIER_NORMAL },
    { id: "704527e4-f2ee-4c3e-83de-0ee7185da8ef", tier: TIER_NORMAL },
    { id: "bdcbd976-b46e-4a9c-8b78-bffd4992fb30", tier: TIER_NORMAL },
    { id: "5843c93d-74d0-4dc3-806a-cdb86fe879da", tier: TIER_NORMAL },
    { id: "2b7b4672-b216-4909-9a15-c3a40c65a87d", tier: TIER_NORMAL },
    { id: "93959cf6-aced-4ebb-a796-ed92e45e9e98", tier: TIER_NORMAL },
    { id: "7d7ef8ae-9300-4c64-9c5c-81d74273ed9e", tier: TIER_NORMAL },
    { id: "69d2f9fc-b907-4a78-8dd4-23ffac08ae97", tier: TIER_NORMAL },
    { id: "f2ef544b-1921-4d70-af34-36847ccf9d29", tier: TIER_NORMAL },
    { id: "41596fff-2a3f-46ec-897f-f9b15b2d5fe6", tier: TIER_NORMAL },
    { id: "2b4c3a6e-a869-49f0-a11a-3caf09171834", tier: TIER_NORMAL },
    { id: "875b900a-3553-4067-a090-05951c72ba7f", tier: TIER_NORMAL },
    { id: "ce150b58-a4f8-4640-887f-8214fd5306a9", tier: TIER_NORMAL },
    { id: "8df7d038-c729-4c8d-952e-c800df8bff21", tier: TIER_NORMAL },
    { id: "08e9c80b-bde1-4a28-9e9d-48c94ffd9a72", tier: TIER_NORMAL },
    { id: "ff066449-9f49-47e6-b7bc-3a375d3e2500", tier: TIER_NORMAL },
    { id: "94aff516-db74-4ce5-8afd-7fa0cbf24686", tier: TIER_NORMAL },
    { id: "211de56d-d458-4307-9197-00add9eb6510", tier: TIER_NORMAL },
    { id: "ed48ca98-604b-406f-9f4d-2e76889890be", tier: TIER_NORMAL },
    { id: "d39965f9-34f5-4c54-9896-3e31d85b93e3", tier: TIER_NORMAL },
    { id: "aa78b353-bb3c-4a16-9d11-f9c6ced3ba5e", tier: TIER_NORMAL },
    { id: "78fe7176-5ec5-4270-8ece-2835c59ccb42", tier: TIER_NORMAL },
    { id: "0c4c49fa-9798-40c5-bc1a-471d27519b33", tier: TIER_NORMAL },
    { id: "bb189747-8e97-43b8-8745-af0ccffb3794", tier: TIER_NORMAL },
    { id: "bfcccbe0-a2ad-46ac-9f93-4aa8d584339d", tier: TIER_NORMAL },
    { id: "71c580b6-0da2-47da-9602-5bc73369db4b", tier: TIER_NORMAL },
    { id: "eb772867-8098-4ff6-9c8e-e2ca6be6577d", tier: TIER_NORMAL },
    { id: "1cee050b-3781-42af-a90b-0ec063412f62", tier: TIER_NORMAL },
    { id: "686b8734-108d-499d-9c82-47ef5e2022ee", tier: TIER_NORMAL },
    { id: "ccc5a5de-67bc-40ae-985c-e98ed805469b", tier: TIER_NORMAL },
    { id: "d6ca60ee-f252-4836-a1b5-7e625a875133", tier: TIER_NORMAL },
    { id: "f0032e98-757a-4feb-a1c2-f339d5a6de1e", tier: TIER_NORMAL },
    { id: "765b0786-f20d-4c6f-aaaa-063e0f0cfec0", tier: TIER_NORMAL },
    { id: "4df457bc-95bd-41fd-9187-36e27fb8fa44", tier: TIER_NORMAL },
    { id: "a7de521f-63ed-49eb-98ff-83ee3f5a6f2f", tier: TIER_NORMAL },
    { id: "56584519-11b8-4dda-9ca5-f793bb070642", tier: TIER_NORMAL },
    { id: "5b0c4b7a-9474-4ab2-aaaf-4867001045a8", tier: TIER_NORMAL },
    { id: "bbdd1df0-289a-449c-a2ff-2fd848b47e3f", tier: TIER_NORMAL },
    { id: "792764de-da1a-4b6d-a0af-1adaab2dd430", tier: TIER_NORMAL },
    { id: "28caa0ca-2190-44d7-9e8e-dd1d3fd3e8d6", tier: TIER_NORMAL },
    { id: "722800cd-049d-475a-943f-7baec4dd0be1", tier: TIER_NORMAL },
    { id: "ba5b1217-25a0-41ed-84a2-ac4697bdee5a", tier: TIER_NORMAL },
    { id: "25bb52f7-c170-4a25-9641-617e025da8b3", tier: TIER_NORMAL },
    { id: "d371a76f-650d-41a9-8f73-2c27b4523963", tier: TIER_NORMAL },
    { id: "87f6d11d-17e4-4be4-8642-ed89f40ffdba", tier: TIER_NORMAL },
    { id: "8f5f13ab-374a-49f3-b829-b41a61c1157d", tier: TIER_NORMAL },
    { id: "36e32a4b-53c2-48a3-a8c0-a0577abf53ca", tier: TIER_NORMAL },
    { id: "02f72e85-5b67-4d58-9f00-8ca01fa994e6", tier: TIER_NORMAL },
    { id: "0cfc7d46-9431-4add-a998-a144be8234dc", tier: TIER_NORMAL },
    { id: "ccd02a5f-c2a2-48fa-99d8-9c4944bae368", tier: TIER_NORMAL },
    { id: "0d67c5c1-fb64-4179-be1b-3b91e9fb877d", tier: TIER_NORMAL },
    { id: "5c2cb993-5d02-46cd-a63c-1dee9a3c9843", tier: TIER_NORMAL },
    { id: "980dbe4c-2e11-4189-8041-9723f40643b9", tier: TIER_NORMAL },
    { id: "7c398a35-37e2-4836-a4b8-8c377c20a480", tier: TIER_NORMAL },
    { id: "188d7efc-e71e-4aa0-a520-83ce77b43c93", tier: TIER_NORMAL },
    { id: "0347c0f8-95b2-41d1-99c9-aade9a27cd62", tier: TIER_NORMAL },
    { id: "d103204b-ff03-4ab1-afbd-84192da3f4cd", tier: TIER_NORMAL },
    { id: "164a2be5-28d9-4d01-ba3e-054bf5349872", tier: TIER_NORMAL },
    { id: "994303ec-051d-4a0e-ac93-851ae23177d1", tier: TIER_NORMAL },
    { id: "f096acf9-b2ef-4fd0-9186-ffbed0b604f8", tier: TIER_NORMAL },

    // friends
    { id: "106ee988-ec8a-48df-9481-5737a934f40c", tier: TIER_NORMAL },
    { id: "e31baa1d-51f6-4431-ae2b-a8e336a07247", tier: TIER_NORMAL },
    { id: "a3fd9864-7148-4019-a690-0ede6626c00d", tier: TIER_NORMAL },
    { id: "62a0bf57-6ca5-4b31-b4df-c44291b9bf29", tier: TIER_NORMAL },

    // bruh
    { id: "c281154a-b27e-475c-ba18-767e887df592", tier: TIER_NORMAL },
    { id: "805c8e7f-d8fa-4093-8728-18f276019429", tier: TIER_NORMAL },
    { id: "2bcba605-37d0-4106-9b1f-cfeabb944707", tier: TIER_NORMAL },
    { id: "b89d5105-fe33-4e31-a94c-e870015224ea", tier: TIER_NORMAL },


    { id: "0169b748-42c2-4b89-a584-b0171df3a3cb", tier: TIER_NORMAL },
    { id: "30111d4a-ce75-454d-9b42-46df30bc98b0", tier: TIER_NORMAL },
    { id: "78e1c6f2-b515-4fea-8634-8ac2f90821d5", tier: TIER_NORMAL },
    { id: "60c060bf-0033-4e0b-a998-b659f5820c63", tier: TIER_NORMAL },
    { id: "a593d5d1-78e4-40bf-a6f2-7c85484f7493", tier: TIER_NORMAL },
    { id: "d6b341c7-894d-4811-bbc0-88928c0a3030", tier: TIER_NORMAL },
    { id: "1245cd0d-68c9-4aee-8651-d11272d99be6", tier: TIER_NORMAL },
    { id: "2f04a46f-3185-43e1-b188-06a244143f1c", tier: TIER_NORMAL },
    { id: "74862453-7ee8-4a61-b2c8-0f8e1cea576b", tier: TIER_NORMAL },
    { id: "03b31d39-6b40-4a2c-8e95-4a61bf3b7659", tier: TIER_NORMAL },
    { id: "721bffba-3bb2-43cd-b388-ce639b5d37d7", tier: TIER_NORMAL },
    { id: "4bf6e0be-7e17-4c55-aa8f-3423f81839b0", tier: TIER_NORMAL },
    { id: "86bbbe7a-225e-4888-93dc-17347fd4fa4a", tier: TIER_NORMAL },
    { id: "e76e8caf-e628-4be3-92a7-e46614f72aba", tier: TIER_NORMAL },
    { id: "d862a862-fa91-4e85-bcac-ecdf65aa2180", tier: TIER_NORMAL },
    { id: "2ce72821-920e-4c10-987f-62465778199d", tier: TIER_NORMAL },
    { id: "7b0d7d34-6d92-4913-b6d4-efdc9ffcefcc", tier: TIER_NORMAL },
    { id: "9f583268-5268-4181-b666-99d888b1a01a", tier: TIER_NORMAL },
    { id: "bfc762d6-94e7-4794-9b5e-fe845cc2d0d3", tier: TIER_NORMAL },
    { id: "3821f416-7169-406d-9681-352c4cdd21e6", tier: TIER_NORMAL },
    { id: "449b3302-14ac-48bf-b625-5dfb5627619f", tier: TIER_NORMAL },
    { id: "6a4d37e0-2f4a-4f32-bdcf-9300281f3696", tier: TIER_NORMAL },
    { id: "4922bbdd-6e8a-432f-aefd-64049d9ecdaf", tier: TIER_NORMAL },
    { id: "94b1a58d-9745-4ed1-adf9-908bda010a69", tier: TIER_NORMAL },
    { id: "a81c8a42-a4f3-48ec-b964-2ecf26c777de", tier: TIER_NORMAL },
    { id: "384c4108-1e6f-436e-86c1-45ba1a4afed3", tier: TIER_NORMAL },
    { id: "2e3d7ef6-1507-484d-b763-27c0e9576570", tier: TIER_NORMAL },
    { id: "99cf1e84-30fc-4022-8872-6156a354c71f", tier: TIER_NORMAL },
    { id: "8d9dd9d5-87a7-4d8c-afe3-ca359e245da3", tier: TIER_NORMAL },
    { id: "2c789349-20d4-4585-8eb0-f635816f2d50", tier: TIER_NORMAL },
    { id: "9a23ebdf-4999-479f-8775-3bf9c725678d", tier: TIER_NORMAL },
    { id: "70056f92-2eb9-4886-906b-2bd1f3ad2df5", tier: TIER_NORMAL },
    { id: "2dae0971-0ea0-4613-ae4f-2c7261cbc171", tier: TIER_NORMAL },
    { id: "e4900edc-ec03-4ba6-a4ee-9d576ba1a166", tier: TIER_NORMAL },
    { id: "948a3de1-6916-4a48-8911-2f23a28416dd", tier: TIER_NORMAL },
    { id: "7eb95de3-0055-4990-b432-97dcbda1159c", tier: TIER_NORMAL },
    { id: "840118dd-8025-4e4b-8e93-74a6f6175b01", tier: TIER_NORMAL },
    { id: "15f6b12c-17ee-4db6-8c64-0d5ee121d987", tier: TIER_NORMAL },
    { id: "13db7ecd-46d2-4a89-be55-a824ba104e6e", tier: TIER_NORMAL },
    { id: "5cf9499d-a985-435c-b4b1-fb4f7c02b074", tier: TIER_NORMAL },
    { id: "2be4054a-f4f6-4724-b61f-264c0e815b9e", tier: TIER_NORMAL },
    { id: "f6464e54-1b1b-48ad-8de6-4e3febbd64ba", tier: TIER_NORMAL },
    { id: "dda73ed2-1b05-430a-8192-de3cc2c988cd", tier: TIER_NORMAL }
];
const crew_tickets = [
    { id: "12c0c150-fc42-4958-9146-acff616a1622", tier: TIER_CREW },
    { id: "cc9b05c9-706d-4061-b36e-b718fa55c2a9", tier: TIER_CREW },
    { id: "3920c44b-0699-4396-b463-484a4dc481fd", tier: TIER_CREW },
    { id: "7666dbfc-8576-4bbb-86ee-3251f6a9679e", tier: TIER_CREW }
];

const tickets = player_tickets.concat(sponsor_tickets, speaker_tickets, normal_tickets, crew_tickets)


const ticketTiers = [
    { color: "#FF4FFC", text: "NORMAL" },  // pink
    { color: "#E44C4C", text: "SPONSOR" }, // red
    { color: "#1F6CE6", text: "PLAYER" },  // blue
    { color: "#E6B81F", text: "SPEAKER" }, // yellow
    { color: "#86E61F", text: "CREW" }     // green
];

const renderTickets = (id) => {
    const target = document.getElementById(id);
    let targetContents = "";
    target.innerHTML = ""; // clear

    targetContents += `<thead>`;
    targetContents += `<tr>`;
    targetContents += `<td>#</td>`;
    targetContents += `<td>ID</td>`;
    targetContents += `<td>Tier</td>`;
    targetContents += `</tr>`;
    targetContents += `</thead>`;
    targetContents += `<tbody>`;

    let i = 0;

    for (const ticket of tickets) {
        targetContents += `<tr style="background-color: ${ticketTiers[ticket.tier].color}">`;
        targetContents += `<td>${i}</td>`;
        targetContents += `<td>${ticket.id}</td>`;
        targetContents += `<td>${ticket.tier}</td>`;
        targetContents += `</tr>`;

        i += 1;
    }

    targetContents += `</tbody>`;

    target.innerHTML = targetContents;

};


const closeResultModal = () => {
    document.getElementById("result-modal").style.display = "none";
    qrScanner.start()
};

const openResultModal = (content, color) => {
    const resultModal = document.getElementById("result-modal");
    const innerResultModal = resultModal.getElementsByClassName("inner")[0];
    const innerContent = innerResultModal.getElementsByClassName("inner-content")[0];
    let textColor = "white";
    let backgroundColor = "black";
    let displayContent = "INVALID TICKET";

    const foundTicket = tickets.find(ticket => ticket.id === content);
    if (foundTicket !== undefined) {
        textColor = "black";
        backgroundColor = ticketTiers[foundTicket.tier].color;
        displayContent = ticketTiers[foundTicket.tier].text;
    }

    innerResultModal.style.color = textColor;
    innerResultModal.style.backgroundColor = backgroundColor;
    innerContent.innerHTML = displayContent;
    resultModal.style.display = "inline-block";
    qrScanner.stop();
};


const handleResult = (result) => {
    openResultModal(result.data, "white")
};