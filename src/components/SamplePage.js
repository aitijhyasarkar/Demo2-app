import {
  CoreBox, CoreClasses, CoreStack, CoreLinearProgress, CoreFormHelperText, CoreDivider, CoreButton
} from "@wrappid/core";

import Checkboxscrollablecard from "./Checkboxscrollablecard";
import Loading from "./Loading";
import Navbar from "./Navbar";
import Textutil from "./Textutil";
function SamplePage() {
  return (
    <CoreStack styleClasses={[
      CoreClasses.WIDTH.W_100,
      CoreClasses.HEIGHT.H_100,
      CoreClasses.GAP.GAP_3,
      CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
      CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER
    ]}>
      <Navbar title="tEXT uTILITY"/>

      <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]} ><CoreLinearProgress value={70} /><CoreBox styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>[This page is ever loading and been processed at the client side]</CoreBox></CoreBox>

      <CoreDivider light={false}></CoreDivider>

      <Textutil/>

      <Loading text="Click here to get a loading screen 😜"/>

      <Checkboxscrollablecard/>

      <CoreDivider light={false} styleClasses={[CoreClasses.HEIGHT.VH_50]}></CoreDivider>

      <CoreButton href="/SamplePage">Wanna Get Redirected?</CoreButton>

      <CoreFormHelperText error={true} styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.ALIGN_ITEMS_START]}>Developer Build</CoreFormHelperText>
    </CoreStack>
  );
}
export default SamplePage;