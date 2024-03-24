import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { MdAddAPhoto } from "react-icons/md";
import styled from "styled-components";
import { storage } from "../../firebaseConfig";

const productState = {
    productName: String,
    category: String,
    description: String,
  };

const AddProduct = ({ addProduct, setAddProduct }) => {
  const [state, setState] = useState(productState);
  const { productName, category, description } = state;
  const [progress, setProgress] = useState(true);
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  //Product Images upload
  useEffect(() => {
    const uploadFile = () => {
     const storageRef = ref(storage, `productBanner${file.name}`);
     const uploadTask = uploadBytesResumable(storageRef, file);
 
     uploadTask.on("state_changed", (snapshot) => {
       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
       setProgress(progress);
       switch (snapshot.state) {
         case "paused":
            console.log("Transfer paused")
           break;
         case "running":
            console.log("Transfer Running")
           break;
         default:
           break;
       }
     }, (err) => {
       console.log(err);
     }, () => {
       getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
         setState((prev) => ({ ...prev, productProfile: downloadUrl }));
         alert('Upload complete can now submit form');
       })
     })
    }
    //eslint-disable-next-line
    file && uploadFile
   }, [file])
   
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <PostCentreAddProductContainer>
      {addProduct && (
        <AddProductWrapper>
          <div
            className="close"
            onClick={() => {
              setAddProduct(false);
            }}
          >
            <FaTimes />
          </div>
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="file"
                name="file"
                id="file"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
              <label htmlFor="file">
                <MdAddAPhoto />
                <span>Upload product Banner</span>
              </label>
            </div>
            <div className="flex-box">
              <div className="input-box">
                <input
                  type="text"
                  name="title"
                  placeholder="Product Name"
                  onChange={handleChange}
                  value={productName}
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  onChange={handleChange}
                  value={category}
                />
              </div>
            </div>
            <div className="msg-box">
              <textarea
                name="message"
                placeholder="Description"
                onChange={handleChange}
                value={description}
              />
            </div>
            <div className="input-box">
              <button
                type="submit"
                disabled={progress !== null && progress > 100}
              >
                Submit Product
              </button>
            </div>
          </form>
        </AddProductWrapper>
      )}
    </PostCentreAddProductContainer>
  );
};

const PostCentreAddProductContainer = styled.section`
  width: 98%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1000;
`;

const AddProductWrapper = styled.article`
  width: 95%;
  height: 98%;
  position: absolute;
  z-index: 100;
  top: 0;
  background: rgba(49, 18, 187, 0.765);
  border-radius: 1pc;
  box-shadow: var(--box-shadow);
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .close {
    width: 25px;
    height: 25px;
    background: red;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-color);
    cursor: pointer;
    float: right;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  .form-container {
    width: 90%;
    height: 98%;
    background: hsla(0, 0%, 100%, 0.895);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .input-box,
    .msg-box {
      width: 90%;
      height: 65px;
      border-radius: 0.5rem;
      box-shadow: 0 0 10px rgba(8, 1, 38, 0.087);
      margin: 10px 0;
      input,
      button,
      label {
        width: 100%;
        height: 100%;
        border-radius: inherit;
        color: var(--hero-color);
        padding: 10px 20px;
        font-size: 16px;
        font-weight: 600;
      }
      button {
        width: 100%;
        background: var(--main-color);
        cursor: pointer;
        font-size: 18px;
        font-weight: 600;
        color: var(--text-color);
      }
      label {
        background: var(--text-color);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        color: var(--sky-blue);
        cursor: pointer;
      }
    }
    .msg-box {
      min-height: 180px;
      textarea {
        resize: none;
        width: 100%;
        height: 100%;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: 600;
      }
    }
    .flex-box {
      width: 90%;
    }
  }

  @media screen and (width: 430px) {
    width: 100%;
    .close{
      right: 9px;
    }
    .form-container{
      width: 100%;

      .input-box, .msg-box{
        width: 98%;
      }

      .flex-box{
        width: 100%;
        flex-direction: column;
      }
    }
  }
`;

export default AddProduct;
