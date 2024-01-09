import { useState } from "react";

import {
  CoreBox, CoreClasses, CoreContainedButton, CoreH5, CoreTextField, CoreCollapse, CoreIconButton, CoreIcon, CoreButton, CoreAlert, CoreFilePicker
} from "@wrappid/core";
function getWordCount(text) {
  text = text.trim().replace(/\s+/g, " ");
  const words = text.split(" ");
  let returnWords = words.length;

  if (text === "" || text.charAt(text.length - 1) === " " || text.charAt(0) === " ") { returnWords--; }
  return returnWords;
}
function getlineCount(text) {
  if (text === "") return 0;
  const lines = text.split(/\r\n|\r|\n/);
  const nonEmptyLines = lines.filter(line => line.trim() !== "");

  return nonEmptyLines.length;
}
function getCharCount(text) {
  const textWithoutNewlines = text.replace(/[\s\r\n]+/g, "");

  return textWithoutNewlines.length;
}
const Textutil = () => {
  const [text, setText] = useState("");
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase().trim();

    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase().trim();

    setText(newText);
  };
  let wordCount = getWordCount(text), lineCount = getlineCount(text), charcount = getCharCount(text);

  return (
    <>
      <CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.FLEX.DIRECTION_ROW_REVERSE]}>
        <CoreTextField 
          variant="outlined" 
          fullWidth={true} 
          label="Enter Your text" 
          style={{ height: "auto" }}
          multiline
          value={text}
          onChange={handleOnChange}/>
      </CoreBox>

      <CoreFilePicker label="OR Upload your txt/pdf file here" helperText="TXT and PDF Formats Only"></CoreFilePicker>

      <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
        <CoreCollapse in={open1}>
          <CoreAlert
            action={
              <CoreIconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen1(false);
                }}>
                <CoreIcon fontSize="inherit">
                  clear
                </CoreIcon>
              </CoreIconButton>
            }
            styleClasses={[CoreClasses.MARGIN.MB2]}>
            <CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.ALIGNMENT.ALIGN_ITEMS_START, CoreClasses.FLEX.DIRECTION_COLUMN]}>
              <CoreH5> {lineCount} Lines,&nbsp;

                {wordCount} Words,&nbsp;

                {charcount} Characters</CoreH5>

              <CoreH5>{0.005 * wordCount} Minutes to read this aloud,&nbsp;

              this will be {0.04 * lineCount} pages in a typical book,&nbsp;

              {0.000002 * lineCount} trees saved,&nbsp;

              {0.02 * wordCount} typing minutes saved</CoreH5>
            </CoreBox>
          </CoreAlert>
        </CoreCollapse>

        <CoreButton
          disabled={open1}
          variant="outlined"
          onClick={() => {
            setOpen1(true);
          }}>
          Word Counter
        </CoreButton>
      </CoreBox>

      <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>
        <CoreCollapse in={open2}>
          <CoreAlert
            action={
              <CoreIconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen2(false);
                }}>
                <CoreIcon fontSize="inherit">
                  clear
                </CoreIcon>
              </CoreIconButton>
            }
            styleClasses={[CoreClasses.MARGIN.MB2]}>
            <CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.DISPLAY.FLEX]}>
              <CoreContainedButton styleClasses={[CoreClasses.PADDING.PX4, CoreClasses.PADDING.PY2, CoreClasses.BG.BG_WARNING_LIGHT]} size="large" onClick={handleUpClick}>To Uppercase</CoreContainedButton>

              <CoreContainedButton styleClasses={[CoreClasses.PADDING.PX4, CoreClasses.PADDING.PY2, CoreClasses.BG.BG_WARNING_LIGHT]} size="large" onClick={handleLowClick}>To Lowercase</CoreContainedButton>
            </CoreBox>
          </CoreAlert>
        </CoreCollapse>

        <CoreButton
          disabled={open2}
          variant="outlined"
          onClick={() => {
            setOpen2(true);
          }}>
          Case Utility
        </CoreButton>
      </CoreBox>
    </>
  );
};

export default Textutil;