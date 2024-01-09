import { useState } from "react";

import {
  CoreBox, CoreButton, CoreCard, CoreCardActions, CoreCardContent, CoreTypographyBody1, CoreCollapse, CoreCheckbox, CoreClasses, CoreStack 
} from "@wrappid/core";
const Checkboxscrollablecard = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <CoreStack spacing={4} styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.HEIGHT.H_100, CoreClasses.BG.BG_GREY_100, CoreClasses.PADDING.P2]}>
      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
        <CoreCheckbox
          checked={checked}
          onChange={handleChange}
          label="Show Facts of the day 👇"
        />
      </CoreBox>

      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_AROUND, CoreClasses.GAP.GAP_1]}>
        <CoreCollapse in={checked}>
          <CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.DISPLAY.FLEX]}>
            <CoreCard >
              <CoreCardContent>
                <CoreTypographyBody1 color="text.secondary" gutterBottom>Fact 1</CoreTypographyBody1>

                <CoreTypographyBody1 variant="h5" component="div">
                            The concept of &ldquo;Lorem Ipsum&rdquo; text, widely used in the printing and typesetting industry, originated from a work by Cicero, a Roman statesman and philosopher. The text is not a coherent Latin passage but rather a scrambled version of &ldquo;De finibus bonorum et malorum&rdquo; (On the Ends of Good and Evil), a philosophical treatise written by Cicero in 45 BC. Designers and typesetters use Lorem Ipsum as a placeholder text to simulate the appearance of written content in a document or webpage layout before the actual text is available.
                </CoreTypographyBody1>
              </CoreCardContent>

              <CoreCardActions>
                <CoreButton size="small">Share</CoreButton>
              </CoreCardActions>
            </CoreCard>

            <CoreCard >
              <CoreCardContent>
                <CoreTypographyBody1 color="text.secondary" gutterBottom>Fact 2</CoreTypographyBody1>

                <CoreTypographyBody1 variant="h5" component="div">
                            The term &ldquo;ASCII&rdquo; stands for American Standard Code for Information Interchange. It&apos;s a character encoding standard that uses numeric codes to represent text characters. Originally developed for telegraph communication, ASCII has become the basis for character encoding in computers and is still widely used today. The standard assigns a unique number to each letter of the alphabet, punctuation marks, digits, and other characters, allowing for consistent representation of text across different systems and platforms.
                </CoreTypographyBody1>
              </CoreCardContent>

              <CoreCardActions>
                <CoreButton size="small">Share</CoreButton>
              </CoreCardActions>
            </CoreCard>

            <CoreCard>
              <CoreCardContent>
                <CoreTypographyBody1 color="text.secondary" gutterBottom>Fact 3</CoreTypographyBody1>

                <CoreTypographyBody1 variant="h5" component="div">
                            The first emoticon, :-) to represent a smiling face, was proposed by computer scientist Scott Fahlman on the Carnegie Mellon University online bulletin board in 1982. Emoticons, which are combinations of keyboard characters used to convey facial expressions and emotions in text form, have since become a widely accepted and integral part of online communication. They laid the foundation for the more elaborate emojis we use today in various messaging platforms and social media.
                </CoreTypographyBody1>
              </CoreCardContent>

              <CoreCardActions>
                <CoreButton size="small">Share</CoreButton>
              </CoreCardActions>
            </CoreCard>
          </CoreBox>
        </CoreCollapse>
      </CoreBox>
    </CoreStack>
  );
};

export default Checkboxscrollablecard;
