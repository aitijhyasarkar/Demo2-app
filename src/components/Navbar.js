import { CoreAvatar, CoreBox, CoreClasses, CoreH4 } from "@wrappid/core";
import PropTypes from "prop-types";
const Navbar = (props) => {
  return (
    <CoreBox styleClasses={[
      CoreClasses.WIDTH.W_100,
      CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
      CoreClasses.ALIGNMENT.ALIGN_ITEMS_START,
      CoreClasses.DISPLAY.FLEX,
      CoreClasses.GAP.GAP_2,
      CoreClasses.BG.BG_ERROR_LIGHT
    ]}>
      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_ROW, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.GAP.GAP_2]}>
        <CoreAvatar src="/images/logomy.png" styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_XXLARGE, CoreClasses.BG.BG_TRANSPARENT]} />

        <CoreH4 styleClasses={[CoreClasses.COLOR.TEXT_SUCCESS]}>{props.title}</CoreH4>
      </CoreBox>

      <CoreAvatar src="/broken-image.jpg" />
    </CoreBox>
  );
};

export default Navbar;
Navbar.propTypes = { title: PropTypes.string };
Navbar.defaultProps = { title: "Set Title Here" };