export default [
    {
        "id": "1",
        "roleTypeId": "1",
        "elementId": "uk-bus_NameEntityOfficer",
        "name": "ThirdPartyAgentsHypercube",
        "parentId": null,
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/all"
    },
    {
        "id": "2",
        "roleTypeId": "1",
        "elementId": "uk-bus_ThirdPartyAgentTypeDimension",
        "name": "Third Party Agent Type Dimension",
        "parentId": "1",
        "order": "1",
        "tag": "ThirdPartyAgentTypeDimension",
        "arcrole": "http://xbrl.org/int/dim/arcrole/hypercube-dimension"
    },
    {
        "id": "3",
        "roleTypeId": "1",
        "elementId": "uk-bus_DimensionMembersIdentifyingTypeThirdPartyAgentHeading",
        "name": "DimensionMembersIdentifyingTypeThirdPartyAgentHeading",
        "parentId": "2",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-domain"
    },
    {
        "id": "4",
        "roleTypeId": "1",
        "elementId": "uk-bus_EntityAccountantsOrAuditors",
        "name": "Entity Accountants Or Auditors",
        "tag": "EntityAccountantsOrAuditors",
        "parentId": "3",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "5",
        "roleTypeId": "1",
        "elementId": "uk-bus_EntityBankers",
        "name": "EntityBankers",
        "tag": "EntityBankers",
        "parentId": "3",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "6",
        "roleTypeId": "1",
        "elementId": "uk-bus_EntityLawyersOrLegalAdvisers",
        "name": "EntityLawyersOrLegalAdvisers",
        "tag": "EntityLawyersOrLegalAdvisers",
        "parentId": "3",
        "order": "3",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "7",
        "roleTypeId": "1",
        "elementId": "uk-bus_EntityPublicRelationsAdvisers",
        "name": "EntityPublicRelationsAdvisers",
        "tag": "EntityPublicRelationsAdvisers",
        "parentId": "3",
        "order": "4",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "8",
        "roleTypeId": "1",
        "elementId": "uk-bus_EntityRegistrationAgents",
        "name": "EntityRegistrationAgents",
        "tag": "EntityRegistrationAgents",
        "parentId": "3",
        "order": "5",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "9",
        "roleTypeId": "1",
        "elementId": "uk-bus_EntityUnderwriters",
        "name": "EntityUnderwriters",
        "tag": "EntityUnderwriters",
        "parentId": "3",
        "order": "6",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "10",
        "roleTypeId": "1",
        "elementId": "uk-bus_AdministratorsForEntity",
        "name": "AdministratorsForEntity",
        "parentId": "3",
        "order": "7",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "11",
        "roleTypeId": "1",
        "elementId": "uk-bus_ReceiversForEntity",
        "name": "ReceiversForEntity",
        "parentId": "3",
        "order": "8",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "12",
        "roleTypeId": "1",
        "elementId": "uk-bus_ThirdPartyAgentStatusDimension",
        "name": "ThirdPartyAgentStatusDimension",
        "parentId": "1",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/hypercube-dimension"
    },
    {
        "id": "13",
        "roleTypeId": "1",
        "elementId": "uk-bus_TotalAgentsDefault",
        "name": "TotalAgentsDefault",
        "parentId": "12",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-domain"
    },
    {
        "id": "14",
        "roleTypeId": "1",
        "elementId": "uk-bus_PrincipalAgent",
        "name": "PrincipalAgent",
        "parentId": "13",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "15",
        "roleTypeId": "1",
        "elementId": "uk-bus_JointAgent1",
        "name": "JointAgent1",
        "parentId": "13",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "16",
        "roleTypeId": "1",
        "elementId": "uk-bus_JointAgent2",
        "name": "JointAgent2",
        "parentId": "13",
        "order": "3",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "17",
        "roleTypeId": "1",
        "elementId": "uk-bus_JointAgent3",
        "name": "JointAgent3",
        "parentId": "13",
        "order": "4",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "18",
        "roleTypeId": "1",
        "elementId": "uk-bus_TotalAgentsDefault",
        "name": "TotalAgentsDefault",
        "parentId": "12",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-default"
    },
    {
        "id": "19",
        "roleTypeId": "1",
        "elementId": "uk-bus_PrincipalAgent",
        "name": "PrincipalAgent",
        "parentId": "18",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "20",
        "roleTypeId": "1",
        "elementId": "uk-bus_JointAgent1",
        "name": "JointAgent1",
        "parentId": "18",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "21",
        "roleTypeId": "1",
        "elementId": "uk-bus_JointAgent2",
        "name": "JointAgent2",
        "parentId": "18",
        "order": "3",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "22",
        "roleTypeId": "1",
        "elementId": "uk-bus_JointAgent3",
        "name": "JointAgent3",
        "parentId": "18",
        "order": "4",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "23",
        "roleTypeId": "1",
        "elementId": "uk-bus_FormContactDimension",
        "name": "FormContactDimension",
        "parentId": "1",
        "order": "3",
        "arcrole": "http://xbrl.org/int/dim/arcrole/hypercube-dimension"
    },
    {
        "id": "24",
        "roleTypeId": "1",
        "elementId": "uk-bus_DimensionMembersIdentifyingFormContactHeading",
        "name": "DimensionMembersIdentifyingFormContactHeading",
        "parentId": "3",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-domain"
    },
    {
        "id": "2eec4712-deb1-4b02-afd3-33b82366793f",
        "roleTypeId": "1",
        "elementId": "uk-bus_MainFormContactDefault",
        "name": "MainFormContactDefault",
        "parentId": "24",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "8924cbef-2765-4f24-b50a-90b1d7cefae3",
        "roleTypeId": "1",
        "elementId": "uk-bus_Direct",
        "name": "Direct",
        "parentId": "24",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "af0e3f51-9585-47d3-b448-4c0bd6ce1d78",
        "roleTypeId": "1",
        "elementId": "uk-bus_Switchboard",
        "name": "Switchboard",
        "parentId": "24",
        "order": "3",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "044e9481-11bd-4773-8784-d2cbf91a4e1f",
        "roleTypeId": "1",
        "elementId": "uk-bus_Office",
        "name": "Office",
        "parentId": "24",
        "order": "4",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "88c6eac7-1d86-4522-ba2c-2d27402a0d82",
        "roleTypeId": "1",
        "elementId": "uk-bus_Personal",
        "name": "Personal",
        "parentId": "24",
        "order": "5",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "b302a867-63ec-40f1-a610-8759509f8a7b",
        "roleTypeId": "1",
        "elementId": "uk-bus_Home",
        "name": "Home",
        "parentId": "24",
        "order": "6",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "55f08cd7-ea37-4e69-a917-93d334a4574c",
        "roleTypeId": "1",
        "elementId": "uk-bus_Day",
        "name": "Day",
        "parentId": "24",
        "order": "7",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "9410eebc-cd30-48b6-87a2-148ef6f6543b",
        "roleTypeId": "1",
        "elementId": "uk-bus_Night",
        "name": "Night",
        "parentId": "24",
        "order": "8",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "46c8c140-2355-482e-bc26-5b8cbb6b50f5",
        "roleTypeId": "1",
        "elementId": "uk-bus_Emergency",
        "name": "Emergency",
        "parentId": "24",
        "order": "9",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "bb1aef1d-e887-4049-a366-10fdf5563c32",
        "roleTypeId": "1",
        "elementId": "uk-bus_AlternativeFormContact1",
        "name": "AlternativeFormContact1",
        "parentId": "24",
        "order": "10",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "fc1afca5-7143-464a-82c8-ed558b0d1c39",
        "roleTypeId": "1",
        "elementId": "uk-bus_AlternativeFormContact2",
        "name": "AlternativeFormContact2",
        "parentId": "24",
        "order": "11",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "ebe26e56-bd82-4a34-af44-2c9bf2e5996c",
        "roleTypeId": "1",
        "elementId": "uk-bus_AlternativeFormContact3",
        "name": "AlternativeFormContact3",
        "parentId": "24",
        "order": "12",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "ee77a05b-76ff-4ecf-a969-03923c06defd",
        "roleTypeId": "1",
        "elementId": "uk-bus_MainFormContactDefault",
        "name": "MainFormContactDefault",
        "parentId": "3",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-default"
    },
    {
        "id": "bdda80a4-89e7-4d9b-aeae-5e4e350f692c",
        "roleTypeId": "1",
        "elementId": "uk-bus_AddressTypeDimension",
        "name": "AddressTypeDimension",
        "parentId": "1",
        "order": "4",
        "arcrole": "http://xbrl.org/int/dim/arcrole/hypercube-dimension"
    },
    {
        "id": "90025b97-5438-4416-b5af-92293946e46a",
        "roleTypeId": "1",
        "elementId": "uk-bus_DimensionMembersIdentifyingTypeAddressHeading",
        "name": "DimensionMembersIdentifyingTypeAddressHeading",
        "parentId": "bdda80a4-89e7-4d9b-aeae-5e4e350f692c",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-domain"
    },
    {
        "id": "be235e90-486c-42cf-a4b8-551d0f7f177a",
        "roleTypeId": "1",
        "elementId": "uk-bus_MainAddressDefault",
        "name": "MainAddressDefault",
        "parentId": "90025b97-5438-4416-b5af-92293946e46a",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "2bf01960-53d2-4a16-b47d-ac2f80eb200d",
        "roleTypeId": "1",
        "elementId": "uk-bus_Postal",
        "name": "Postal",
        "parentId": "90025b97-5438-4416-b5af-92293946e46a",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "82b4052d-0247-41f5-8761-e88331f235f0",
        "roleTypeId": "1",
        "elementId": "uk-bus_Street",
        "name": "Street",
        "parentId": "90025b97-5438-4416-b5af-92293946e46a",
        "order": "3",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "415ecb3d-b792-4165-93da-b57de2c42d77",
        "roleTypeId": "1",
        "elementId": "uk-bus_MainAddressDefault",
        "name": "MainAddressDefault",
        "parentId": "bdda80a4-89e7-4d9b-aeae-5e4e350f692c",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-default"
    },
    {
        "id": "fc1530b6-6402-413e-9ffa-77293776e326",
        "roleTypeId": "1",
        "elementId": "uk-bus_PhoneNumberTypeDimension",
        "name": "PhoneNumberTypeDimension",
        "parentId": "1",
        "order": "5",
        "arcrole": "http://xbrl.org/int/dim/arcrole/hypercube-dimension"
    },
    {
        "id": "09c8b056-b242-4321-9b86-ae5399c3645c",
        "roleTypeId": "1",
        "elementId": "uk-bus_DimensionMembersIdentifyingTypePhoneNumberHeading",
        "name": "DimensionMembersIdentifyingTypePhoneNumberHeading",
        "parentId": "fc1530b6-6402-413e-9ffa-77293776e326",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-domain"
    },
    {
        "id": "7cad8afd-9afd-4056-a0d0-aef677bd0b08",
        "roleTypeId": "1",
        "elementId": "uk-bus_Landline",
        "name": "Landline",
        "parentId": "09c8b056-b242-4321-9b86-ae5399c3645c",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "d8facbb7-48af-4a8b-ab6b-59cef6fa0efc",
        "roleTypeId": "1",
        "elementId": "uk-bus_Mobile",
        "name": "Mobile",
        "parentId": "09c8b056-b242-4321-9b86-ae5399c3645c",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "b8299f80-69c8-4daf-a4b4-b94732b6131a",
        "roleTypeId": "1",
        "elementId": "uk-bus_Fax",
        "name": "Fax",
        "parentId": "09c8b056-b242-4321-9b86-ae5399c3645c",
        "order": "3",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "efcf227e-a601-4c33-b25b-47d2459d45db",
        "roleTypeId": "1",
        "elementId": "uk-common_NotApplicable",
        "name": "on_NotApplicable",
        "parentId": "09c8b056-b242-4321-9b86-ae5399c3645c",
        "order": "4",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "ac6747e7-dc71-4c38-a1f0-e549d60795a1",
        "roleTypeId": "1",
        "elementId": "uk-common_NotApplicable",
        "name": "on_NotApplicable",
        "parentId": "fc1530b6-6402-413e-9ffa-77293776e326",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-default"
    },
    {
        "id": "1e5cf12e-5272-4787-8125-e139725766fc",
        "roleTypeId": "1",
        "elementId": "uk-countries_CountriesDimension",
        "name": "tries_CountriesDimension",
        "parentId": "1",
        "order": "6",
        "arcrole": "http://xbrl.org/int/dim/arcrole/hypercube-dimension"
    },
    {
        "id": "5470a519-ab3a-46fb-bc70-e0dda329d71f",
        "roleTypeId": "1",
        "elementId": "uk-countries_DimensionMembersRepresentingCountriesRegionsHeading",
        "name": "tries_DimensionMembersRepresentingCountriesRegionsHeading",
        "parentId": "1e5cf12e-5272-4787-8125-e139725766fc",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-domain"
    },
    {
        "id": "be64d597-44b2-47c9-9cae-e35ef0e0aab8",
        "roleTypeId": "1",
        "elementId": "uk-countries_AllCountries",
        "name": "tries_AllCountries",
        "parentId": "5470a519-ab3a-46fb-bc70-e0dda329d71f",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "2c8c5d59-f310-4150-a17c-375bb6a1b4da",
        "roleTypeId": "1",
        "elementId": "uk-countries_HomeCountriesHeading",
        "name": "tries_HomeCountriesHeading",
        "parentId": "5470a519-ab3a-46fb-bc70-e0dda329d71f",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "fe00b4ef-4f97-477e-8ea4-7e1fdef988bc",
        "roleTypeId": "1",
        "elementId": "uk-countries_MainRegionsHeading",
        "name": "tries_MainRegionsHeading",
        "parentId": "5470a519-ab3a-46fb-bc70-e0dda329d71f",
        "order": "3",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "69013301-295a-4dde-8d7b-4664988fe712",
        "roleTypeId": "1",
        "elementId": "uk-countries_CountryListHeading",
        "name": "tries_CountryListHeading",
        "parentId": "5470a519-ab3a-46fb-bc70-e0dda329d71f",
        "order": "4",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "a8ceaca3-382b-4d5c-bf3d-8191d7a75817",
        "roleTypeId": "1",
        "elementId": "uk-common_NotApplicable",
        "name": "on_NotApplicable",
        "parentId": "5470a519-ab3a-46fb-bc70-e0dda329d71f",
        "order": "5",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "2b33cf3e-e404-4612-96bd-dadb7db0ffa7",
        "roleTypeId": "1",
        "elementId": "uk-common_NotApplicable",
        "name": "on_NotApplicable",
        "parentId": "1e5cf12e-5272-4787-8125-e139725766fc",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-default"
    },
    {
        "id": "dc7871bc-930e-478c-b034-e82b8b8c88d4",
        "roleTypeId": "1",
        "elementId": "uk-lang_LanguagesDimension",
        "name": "_LanguagesDimension",
        "parentId": "1",
        "order": "7",
        "arcrole": "http://xbrl.org/int/dim/arcrole/hypercube-dimension"
    },
    {
        "id": "178804ec-3041-4eb4-b14b-575c825fd709",
        "roleTypeId": "1",
        "elementId": "uk-lang_DimensionMembersRepresentingLanguagesHeading",
        "name": "_DimensionMembersRepresentingLanguagesHeading",
        "parentId": "dc7871bc-930e-478c-b034-e82b8b8c88d4",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-domain"
    },
    {
        "id": "d6c3f8e4-27f4-4019-948d-e525d8038aa1",
        "roleTypeId": "1",
        "elementId": "uk-lang_English",
        "name": "_English",
        "parentId": "178804ec-3041-4eb4-b14b-575c825fd709",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "b68d287c-6a56-4fb5-a713-d871afdfd0a1",
        "roleTypeId": "1",
        "elementId": "uk-lang_AllLanguages",
        "name": "_AllLanguages",
        "parentId": "178804ec-3041-4eb4-b14b-575c825fd709",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "bc3c1feb-6cf1-4749-a7c0-c57e12379535",
        "roleTypeId": "1",
        "elementId": "uk-lang_LanguageListHeading",
        "name": "_LanguageListHeading",
        "parentId": "178804ec-3041-4eb4-b14b-575c825fd709",
        "order": "3",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "c29e14e4-a29c-47d9-8740-a5b98c8de535",
        "roleTypeId": "1",
        "elementId": "uk-common_NotApplicable",
        "name": "on_NotApplicable",
        "parentId": "178804ec-3041-4eb4-b14b-575c825fd709",
        "order": "4",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "0755e883-2f80-4d44-acc1-de2c9ac49c7d",
        "roleTypeId": "1",
        "elementId": "uk-common_NotApplicable",
        "name": "on_NotApplicable",
        "parentId": "dc7871bc-930e-478c-b034-e82b8b8c88d4",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-default"
    },
    {
        "id": "12b135a1-77bb-4945-a72e-72807b4b0426",
        "roleTypeId": "1",
        "elementId": "uk-gaap_GroupCompanyDimension",
        "name": "_GroupCompanyDimension",
        "parentId": "1",
        "order": "8",
        "arcrole": "http://xbrl.org/int/dim/arcrole/hypercube-dimension"
    },
    {
        "id": "cfab7be7-8baf-4242-9a76-40192726159c",
        "roleTypeId": "1",
        "elementId": "uk-gaap_Consolidated",
        "name": "_Consolidated",
        "parentId": "12b135a1-77bb-4945-a72e-72807b4b0426",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-domain"
    },
    {
        "id": "0d98d637-7eb7-4b9f-ba2d-2a7cd8b24081",
        "roleTypeId": "1",
        "elementId": "uk-gaap_CompanyDefault",
        "name": "_CompanyDefault",
        "parentId": "cfab7be7-8baf-4242-9a76-40192726159c",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "1c9f3007-da11-4112-9f1f-1fdfce799945",
        "roleTypeId": "1",
        "elementId": "uk-gaap_GroupShareJoint-venturesExcludingAssociatesTurnoverOnly",
        "name": "_GroupShareJoint-venturesExcludingAssociatesTurnoverOnly",
        "parentId": "cfab7be7-8baf-4242-9a76-40192726159c",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "4cb57c93-e583-48f9-a9a9-ea2db5f8c482",
        "roleTypeId": "1",
        "elementId": "uk-gaap_ShareJoint-venturesAssociates",
        "name": "_ShareJoint-venturesAssociates",
        "parentId": "cfab7be7-8baf-4242-9a76-40192726159c",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "a1c6b7ea-1281-48df-896e-9a055f2d3c17",
        "roleTypeId": "1",
        "elementId": "uk-gaap_ShareJoint-ventures",
        "name": "_ShareJoint-ventures",
        "parentId": "cfab7be7-8baf-4242-9a76-40192726159c",
        "order": "3",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "4d320b8a-3822-4ed9-908e-4086a8a62d89",
        "roleTypeId": "1",
        "elementId": "uk-gaap_GroupAfterAssociatesBeforeJoint-ventures",
        "name": "_GroupAfterAssociatesBeforeJoint-ventures",
        "parentId": "cfab7be7-8baf-4242-9a76-40192726159c",
        "order": "4",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "5f801451-e00d-4c62-86eb-20442ce850aa",
        "roleTypeId": "1",
        "elementId": "uk-gaap_ShareAssociates",
        "name": "_ShareAssociates",
        "parentId": "cfab7be7-8baf-4242-9a76-40192726159c",
        "order": "5",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "bc5c6eb6-a81b-443d-a4c2-4c1b561014d7",
        "roleTypeId": "1",
        "elementId": "uk-gaap_GroupBeforeAssociatesJoint-ventures",
        "name": "_GroupBeforeAssociatesJoint-ventures",
        "parentId": "cfab7be7-8baf-4242-9a76-40192726159c",
        "order": "6",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "816529ae-b1ec-43fc-9f9f-30c2afa7fd55",
        "roleTypeId": "1",
        "elementId": "uk-gaap_CompanyDefault",
        "name": "_CompanyDefault",
        "parentId": "cfab7be7-8baf-4242-9a76-40192726159c",
        "order": "7",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "0d35fbc6-1964-4e6f-b646-751ec5bb6eaf",
        "roleTypeId": "1",
        "elementId": "uk-gaap_CompanyDefault",
        "name": "_CompanyDefault",
        "parentId": "12b135a1-77bb-4945-a72e-72807b4b0426",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-default"
    },
    {
        "id": "61310519-5757-46d5-bf88-634c61f3bfbd",
        "roleTypeId": "1",
        "elementId": "uk-gaap_RestatementsDimension",
        "name": "_RestatementsDimension",
        "parentId": "1",
        "order": "9",
        "arcrole": "http://xbrl.org/int/dim/arcrole/hypercube-dimension"
    },
    {
        "id": "334b7aea-8954-4f01-af1f-3328759b2b5e",
        "roleTypeId": "1",
        "elementId": "uk-gaap_RestatedAmount",
        "name": "_RestatedAmount",
        "parentId": "61310519-5757-46d5-bf88-634c61f3bfbd",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-domain"
    },
    {
        "id": "fc2ebf61-8085-4276-8370-2d49915f75ee",
        "roleTypeId": "1",
        "elementId": "uk-gaap_PriorPeriodIncreaseDecrease",
        "name": "_PriorPeriodIncreaseDecrease",
        "parentId": "334b7aea-8954-4f01-af1f-3328759b2b5e",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "e6ad0365-baea-49f6-b948-8d01331c1dc5",
        "roleTypeId": "1",
        "elementId": "uk-gaap_OriginalAmountDefault",
        "name": "_OriginalAmountDefault",
        "parentId": "334b7aea-8954-4f01-af1f-3328759b2b5e",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "398283dc-ff6c-4d07-b24f-5f8bb320b615",
        "roleTypeId": "1",
        "elementId": "uk-gaap_OriginalAmountDefault",
        "name": "_OriginalAmountDefault",
        "parentId": "61310519-5757-46d5-bf88-634c61f3bfbd",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-default"
    }
]