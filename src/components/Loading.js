import { useState } from "react";

import {
  CoreAlert, CoreClasses, CoreIcon, CoreIconButton, CoreCollapse, CoreCircularProgress, CoreBackdrop, CoreButton, CoreStack 
} from "@wrappid/core";
import PropTypes from "prop-types";
const Loading = (props) => {
  const [open3, setOpen3] = useState(false);

  return (
    <CoreStack
      direction="row"
      styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
      <CoreButton
        onClick={() => {
          setOpen3(true);
        }}>
        {props.text}
      </CoreButton>

      <CoreBackdrop
        styleClasses={[CoreClasses.COLOR.TEXT_WHITE, CoreClasses.Z_INDEX.Z_3]}
        open={open3}
        onClick={() => {
          setOpen3(false);
        }}>
        <CoreCircularProgress color="success" />

        <CoreCollapse in={open3}>
          <CoreAlert
            action={
              <CoreIconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen3(false);
                }}>
                <CoreIcon fontSize="inherit">clear</CoreIcon>
              </CoreIconButton>
            }
            styleClasses={[CoreClasses.MARGIN.MB2]}>
          </CoreAlert>
        </CoreCollapse>
      </CoreBackdrop>
    </CoreStack>
  );
};

export default Loading;
Loading.propTypes = { title: PropTypes.string };