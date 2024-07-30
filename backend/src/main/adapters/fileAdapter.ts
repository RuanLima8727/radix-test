import multer from "multer"

export const fileAdapter = ()=>{
    const storage = multer.memoryStorage();
    const upload = multer({ storage: storage });


    return upload.single('file')
}