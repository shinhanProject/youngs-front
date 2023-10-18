import React, { useEffect, useState } from "react";
import AWS from "aws-sdk";

const LoadFile = () => {
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
    const htmlKey = "basic/when.html";

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

  const [imageUrl, setImageUrl] = useState("");
  const s3 = new AWS.S3();
  useEffect(() => {
    // S3에서 이미지를 가져옵니다.
    s3.getObject(
      { Bucket: "youngs-article", Key: "images/table01.png" },
      (err, data) => {
        if (err) {
          console.error("Error loading image from S3:", err);
        } else {
          // 이미지를 불러오면 URL을 설정합니다.
          const url = URL.createObjectURL(
            new Blob([data.Body], { type: data.ContentType }),
          );
          setImageUrl(url);
        }
      },
    );
  }, []);

  return (
    <div>
      <h1>HTML from S3</h1>
      {imageUrl && <img src={imageUrl} alt="S3 이미지" />}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default LoadFile;
