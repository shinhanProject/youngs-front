import React, { useEffect, useState } from "react";
import AWS from "aws-sdk";
import { Container } from "./styled";

const LoadFile = ({ currentHTMLKey }) => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    AWS.config.update({
      region: "ap-northeast-2",
      accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
    });

    // S3 버킷 및 HTML 파일 키 설정
    const s3 = new AWS.S3();
    const bucketName = "youngs-article";
    const htmlKey = currentHTMLKey;

    // HTML 파일 가져오기
    const params = {
      Bucket: bucketName,
      Key: htmlKey,
    };

    s3.getObject(params, (err, data) => {
      if (err) {
        console.error("Error getting HTML file from S3:", err);
      } else {
        const Content = data.Body.toString("utf-8");
        setHtmlContent(Content);
      }
    });
  }, []);

  console.log(currentHTMLKey);

  return (
    <Container>
      <span dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </Container>
  );
};

export default LoadFile;
