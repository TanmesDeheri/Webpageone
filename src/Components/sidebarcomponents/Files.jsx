import { React, useState, useEffect } from 'react'
import { Button, Table } from 'reactstrap'
import './file.css'
import { MdOutlineFileUpload } from "react-icons/md";
import { BsFiletypePng } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa";
import { SiJpeg } from "react-icons/si";
import { BsFiletypeJpg } from "react-icons/bs";
import { BiSolidFileTxt } from "react-icons/bi";
import { BsFileZipFill } from "react-icons/bs";
import { BsFiletypeDocx } from "react-icons/bs";
import { BsFiletypeXlsx } from "react-icons/bs";
import { AiFillFileUnknown } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

export default function Files() {
    const [FileList, setFileList] = useState([])
    const [selectedFile, setselectedFile] = useState(null)
    useEffect(() => { }, [selectedFile, FileList]);

    const getIcon=(name)=>{
        const extension=name.split('.')[1]
        console.log(extension)
        const extensionMap={
            jpg:<BsFiletypeJpg  className='fileiconcolor'/>,
            jpeg:<SiJpeg  className='fileiconcolor'/>,
            png:<BsFiletypePng className='fileiconcolor'/>,
            pdf:<FaFilePdf className='fileiconcolor'/>,
            txt:<BiSolidFileTxt  className='fileiconcolor'/>,
            zip:<BsFileZipFill  className='fileiconcolor'/>,
            docx:<BsFiletypeDocx  className='fileiconcolor'/>,
            xlsx:<BsFiletypeXlsx  className='fileiconcolor'/>,
        }
        const icon=extensionMap[extension.toLowerCase()] || <AiFillFileUnknown className='fileiconcolor'/>
        return icon

    }

    const deleteHandler=(index)=>{
        console.log('delete icon triggered')
        console.log(index)
        let newArray=[...FileList];
        newArray.splice(index,1);
        setFileList(newArray)
    }

    const changeHandler = (event) => {

        setselectedFile(event.target.files[0])

    }

    const submitFiles = async (event) => {

        event.preventDefault()
        if (selectedFile)
            setFileList((prevFileList) => { return [...prevFileList, selectedFile] })
        setselectedFile(null)

    }
    return (
        <div className='FileUploadPage'>
            <h1>Files Upload Page</h1>
            <hr />
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quaerat consectetur quis a consequatur est enim mollitia unde obcaecati, soluta tempora, praesentium odit ducimus nostrum cum veritatis dignissimos sapiente consequuntur debitis eaque? Id esse aut dolore ab vero, porro repellat similique eius libero dolorum veritatis. Vitae, itaque! Possimus illum quidem eum libero ad numquam quo, vitae maiores, labore, voluptate dolor earum repellat? Error cum aut repellat molestiae, possimus laboriosam magni fugiat quas debitis natus! Alias, laboriosam! Voluptatem enim doloremque explicabo deserunt officia? Totam odit magni quisquam facere vero voluptatem assumenda veritatis quo alias et deleniti quod omnis odio laudantium necessitatibus vel voluptas, minus provident voluptates recusandae quasi fugit deserunt quam sequi. Nemo placeat error numquam maxime. Ullam unde, quo obcaecati quidem itaque voluptate fuga dignissimos id odio nisi? Totam, perferendis. Esse, ducimus vitae. Porro autem ad doloremque accusamus vero fugit tempore recusandae quos hic maxime. Quidem nostrum perspiciatis architecto explicabo laudantium corporis velit facilis, voluptatibus numquam rerum atque voluptate voluptates iste accusamus maxime, obcaecati facere, molestiae consequuntur eveniet. Facilis magnam quidem illo eius debitis rerum nam sequi et est cumque ipsa voluptatem optio porro, officia quam neque eligendi doloremque. Nesciunt delectus atque non a mollitia veritatis nihil nulla voluptatem similique.</p>
            <div className="container" style={{ gap: '2em', alignItems: 'center' }}>
                <div className="fileUploadPane">
                    <span className='fileUploadIcon'>
                        <MdOutlineFileUpload />
                    </span>
                    <input type="file" name='file' onChange={changeHandler} />
                </div>
                <div>
                    <Button
                        color="primary"
                        onClick={submitFiles}
                    >
                        Submit
                    </Button>
                </div>
            </div>
            {
                FileList.length !== 0 && <Table dark style={{ marginTop: '3em', border: 'aqua' }}>
                    <thead>
                        <tr>
                            <th>
                                SR.No
                            </th>
                            <th>
                                File
                            </th>
                            <th>
                                Size
                            </th>
                            <th>
                                File Type
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {FileList?.map((DATA, index) => {
                            const { name, size, type } = DATA
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{getIcon(name)}{name?.substring(0, 7)}</td>
                                    <td>{size + 'KB'}</td>
                                    <td>{type?.substring(0,11)}</td>
                                    <td><MdDelete className='deleteIcon' onClick={()=>{deleteHandler(index)}}/></td>
                                    <td></td>
                                </tr>)
                        })}
                    </tbody>
                </Table>
            }
        </div>
    )
}
