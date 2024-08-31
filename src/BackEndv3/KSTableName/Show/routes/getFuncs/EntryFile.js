import express from 'express';

var router = express.Router();

import {
    GetFunc, GetDataOnlyFunc, GetImagesFunc, GetBodyCheckFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetWithJoinsFunc, GetDataSortByColumnFunc, GetRowDataFunc,
    GetMaxRowFunc,GetLastRowFunc,GetMinRowFunc,GetFirstRowFunc
} from '../../controllers/getFuncs/EntryFile.js';

router.get('/', GetFunc);
router.get('/DataOnly', GetDataOnlyFunc);
router.get('/Images', GetImagesFunc);
router.get('/BodyCheck', GetBodyCheckFunc);
router.get('/FromModal', GetFromModalFunc);
router.get('/FromModalUuid', GetFromModalUuidFunc);
router.get('/WithJoins', GetWithJoinsFunc);
router.get('/Sort/:Column', GetDataSortByColumnFunc);
router.get('/:id', GetRowDataFunc);
router.get('/MaxRow', GetMaxRowFunc);
router.get('/LastRow', GetLastRowFunc);
router.get('/MinRow', GetMinRowFunc);
router.get('/FirstRow', GetFirstRowFunc);
router.get('/Filter/:FilterKey/:FilterValue', GetDataOnlyFunc);

export { router };