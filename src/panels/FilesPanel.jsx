import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

export const FilesPanel = () => {
    const [hover, setHover] = useState(false);
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            "image/*": []
        },
        onDrop: acceptedFiles => {
            /*
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
            */
        }
    });

    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
            </div>
        </div>
    ));

    useEffect(() => {
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    const thumbsContainer = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 16
    };

    const thumb = {
        display: "inline-flex",
        borderRadius: 2,
        border: "1px solid #eaeaea",
        marginBottom: 8,
        marginRight: 8,
        width: 100,
        height: 100,
        padding: 4,
        boxSizing: "border-box"
    };

    const thumbInner = {
        display: "flex",
        minWidth: 0,
        overflow: "hidden"
    };

    const img = {
        display: "block",
        width: "auto",
        height: "100%"
    };


    return (
        <div className="modal fade" id="filesModal" tabIndex="-1" aria-labelledby="filesModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="filesModalLabel">Files</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-12">
                                <section>
                                    <div {...getRootProps({ className: "dropzone" })}>
                                        <input {...getInputProps()} />
                                        <p className="border text-center border-1 p-5">Drag and drop some files here, or click to select files</p>
                                    </div>
                                    <aside style={thumbsContainer}>
                                        {thumbs}
                                    </aside>
                                </section>
                            </div>
                            <div className="col-md-12">
                                <div className="d-flex flex-row bd-highlight mb-3">
                                    <div className="p-2 bd-highlight file-item">
                                        <img src="https://placehold.co/600x400/EEE/31343C" className="img-fluid"  data-bs-dismiss="modal"/>
                                    </div>
                                    <div className="p-2 bd-highlight file-item">
                                        <img src="https://placehold.co/600x400/EEE/31343C" className="img-fluid"  data-bs-dismiss="modal"/>
                                    </div>
                                    <div className="p-2 bd-highlight file-item">
                                        <img src="https://placehold.co/600x400/EEE/31343C" className="img-fluid"  data-bs-dismiss="modal"/>
                                    </div>
                                </div>
                                <div className="d-flex flex-row bd-highlight mb-3">
                                    <div className="p-2 bd-highlight file-item">
                                        <img src="https://placehold.co/600x400/EEE/31343C" className="img-fluid"  data-bs-dismiss="modal"/>
                                    </div>
                                    <div className="p-2 bd-highlight file-item">
                                        <img src="https://placehold.co/600x400/EEE/31343C" className="img-fluid"  data-bs-dismiss="modal"/>
                                    </div>
                                    <div className="p-2 bd-highlight file-item">
                                        <img src="https://placehold.co/600x400/EEE/31343C" className="img-fluid"  data-bs-dismiss="modal"/>
                                    </div>
                                </div>
                                <div className="d-flex flex-row bd-highlight mb-3">
                                    <div className="p-2 bd-highlight file-item">
                                        <img src="https://placehold.co/600x400/EEE/31343C" className="img-fluid"  data-bs-dismiss="modal"/>
                                    </div>
                                    <div className="p-2 bd-highlight file-item">
                                        <img src="https://placehold.co/600x400/EEE/31343C" className="img-fluid"  data-bs-dismiss="modal"/>
                                    </div>
                                    <div className="p-2 bd-highlight file-item">
                                        <img src="https://placehold.co/600x400/EEE/31343C" className="img-fluid"  data-bs-dismiss="modal"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
