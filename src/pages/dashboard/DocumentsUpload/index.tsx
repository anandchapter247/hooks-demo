import React, { FunctionComponent, useState } from "react";
import DocumentsUploadForm from "./DocumentsUploadForm";

const DocumentsUpload: FunctionComponent = () => {

  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState('Closed');

  return (
    <>
      <DocumentsUploadForm
        collapse={collapse}
        setCollapse={setCollapse}
        status={status}
        setStatus={setStatus}
      />
    </>
  );

}
export default DocumentsUpload;
