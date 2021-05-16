import expressAsyncHandler from 'express-async-handler';
import allProduct from '../models/allProductModel.js';
import hype from '../models/hypeModel.js';
import latest from '../models/latestModel.js';
import reqList from '../models/requestModel.js';
import topList from '../models/topListModel.js';

    // @route   GET api/admin/remove
    // @desc    Del requests or product from db
    // @access  private 

const removeProducts = expressAsyncHandler(async (req, res) => {
    try {
        let updateMessage = '';
        let deleteMessage = '';
        const allListName = {
            'hypeList': hype, 
            'latestList': latest,  
            'topList': topList, 
        };
        const data = req.body;
        const nameOfList = allListName[data.listName]
        const idList = data.choosensID;
        if (data.listName === 'allProductList') {
            await Promise.all(idList.map(async (state) => {
                const product = await allProduct.findById(state);
                if (product) {
                    await Promise.all(Object.values(allListName).map(async(value) => {
                        const inValuesList = await value.findById(state);
                        if (inValuesList) {
                            await inValuesList.remove()
                        }
                    }));
                    deleteMessage = `Delete in ${data.listName} is successfully.`;
                    await product.remove();
                } else {
                    deleteMessage = 'Prodcut not found.'
                }
            }));
            res.status(200).send({deleteMessage})
        } else if(data.listName === "requestList") {
            await Promise.all(idList.map(async (state) => {
                const product = await reqList.findById(state);
                if (product) {
                    deleteMessage = `Delete in ${data.listName} is successfully.`;
                    await product.remove();
                } else {
                    deleteMessage = 'Prodcut not found.'
                }
            }));
            res.status(200).send({deleteMessage})
        } else {
            if (data.listName) {
                await Promise.all(idList.map(async (state) => {
                    const product = await nameOfList.findById(state);
                    if (product) {
                        deleteMessage = `Delete in ${data.listName} is successfully.`;
                        await product.remove();
                    } else {
                        deleteMessage = 'Product not found.'
                    }
                }));
                await Promise.all(idList.map(async (state) => {
                    const product = await allProduct.findById(state);
                    if (product) {
                        product.options[data.listName] = false;
                        const newOptions = {options: {...product.options}};
                        const filter = {_id: state};
                        const updated = await allProduct.findOneAndUpdate(filter,newOptions, {
                            new: true
                        });
                        updateMessage = updated.options
                    } else {
                        updateMessage = 'Product not found.'
                    }
                }));
                res.status(200).send({updateMessage, deleteMessage})
            } else {
                res.status(200).send({data: 'nondata'})
            }
        }
    } catch (err) {
        console.log(err)
    }
})

export default removeProducts;