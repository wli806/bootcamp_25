import * as XLSX from 'xlsx'
import {useDispatch, useSelector} from 'react-redux'
import '../App.css'
import AddIcon from '@mui/icons-material/Add';
import GetAppIcon from '@mui/icons-material/GetApp';
import { IconButton } from '@mui/material'
import FileUploadIcon from '@mui/icons-material/FileUpload';

import {setMessage} from '../store/reducers/messageSlice'
import {apiPost} from '../Service'
const ToolBar = ({setIsAddRow, fetchData}) => {
    const dispatch = useDispatch();
    const productsData = useSelector(state => state.products.data);

    const handleAddRow = () => {
        setIsAddRow(true);
    }

    const handleExportData = () => {
        const worksheet = XLSX.utils.json_to_sheet(productsData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Products');
        XLSX.writeFile(workbook, 'products.xlsx');

        dispatch(setMessage('export-success'));
    }

    const downloadTemplate = () => {
        let data = [
            { Title: 'iphone', Description: "It is a smart phone.", Price: 1200.00}
        ]
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Products');
        XLSX.writeFile(workbook, 'Template.xlsx');
    }

    async function saveDataAndFetchList(dataArray) {
        const saveItem = async (formData) => {
            return apiPost('products', formData);
        };
    
        for (const item of dataArray) {
            try {
                let formData = new FormData();
                formData.append('title', item[0]);
                formData.append('description', item[1]);
                formData.append('price', parseFloat(item[2]));
                formData.append('is_active', 1);
                formData.append('category_id', 1);

                await saveItem(formData); // 逐个保存
            } catch (error) {
                console.error('保存失败:', item, error);
            }
        }
        await fetchData();
    }


    const handleUploadData = async (e) => {
        let uploadedFile = e.target.files[0];
        let fileReader = new FileReader();
        fileReader.readAsArrayBuffer(uploadedFile)
        fileReader.onload = async (e) => {
            let bufferArray = e.target.result
            let workbook = XLSX.read(bufferArray, { type: "buffer" })
            let data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], { header: 1 })
            saveDataAndFetchList(data.slice(1));
        }
    }

    return (
        <div className="tool-box">
            <div className="common-box" onClick={handleAddRow}>
                <span className="mr-10">Add New</span>
                <IconButton
                    sx={{ px: 1.5 }}
                    component="label">
                    <AddIcon sx={{ color: 'rgba(0, 0, 0, 0.54)' }}/>
                </IconButton>
            </div>
            <div className="export-upload-box">
                <div className="common-box mr-20" onClick={downloadTemplate}>
                    <span className="mr-10">Template</span>
                    <IconButton
                        sx={{ px: 1.5 }}
                        component="label">
                        <GetAppIcon sx={{ color: 'rgba(0, 0, 0, 0.54)' }}/>
                    </IconButton>
                </div>
                <div className="common-box mr-20" onClick={handleExportData}>
                    <span className="mr-10">Export Excel</span>
                    <IconButton
                        sx={{ px: 1.5 }}
                        component="label">
                        <GetAppIcon sx={{ color: 'rgba(0, 0, 0, 0.54)' }}/>
                    </IconButton>
                </div>
                <div className="common-box">
                    <span className="mr-10">Upload Excel</span>
                    <IconButton
                        sx={{ px: 1.5 }}
                        component="label"
                        htmlFor='upload-excel'>
                        <FileUploadIcon sx={{ color: 'rgba(0, 0, 0, 0.54)' }}/>
                    </IconButton>
                </div>
                <input 
                    type="file" 
                    id="upload-excel" 
                    hidden 
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
                    onChange={(e) => handleUploadData(e)}/>
            </div>
        </div>
    )
}

export default ToolBar
