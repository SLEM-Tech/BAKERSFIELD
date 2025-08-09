import { useGeneralSettings } from "@src/components/lib/woocommerce";
import React from "react";

const RefundPolicy = () => {
  const { data: generalSettings, isLoading, isError } = useGeneralSettings();
  const GeneralSettings: WooCommerceSetting[] = generalSettings;

  return (
    <div id="refundPolicy" className="text-[#667085]">
      <h3 className="font-semibold text-sm md:text-base xl:text-lg mb-2">
        REFUND POLICY - BAKERSFIELD ELEMENTARY SERVICES LIMITED
      </h3>
      <p className="text-xs md:text-sm xl:text-base mb-4">
        Effective Date: {new Date().toLocaleDateString("en-GB")}
      </p>

      <p className="text-xs md:text-sm xl:text-base mb-4">
        At Bakersfield Elementary Services Limited, we are committed to
        delivering high-quality digital content that meets your expectations.
        Our refund policy for audiovisual media, books, and movies is designed
        to ensure customer satisfaction while protecting intellectual property
        rights.
      </p>

      <ul className="list-disc pl-5 space-y-3 leading-[1.8] text-xs md:text-sm xl:text-base">
        <li>
          <span className="font-medium">
            1. Digital Content Refund Eligibility
          </span>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>
              Technical issues preventing content download or playback within 48
              hours
            </li>
            <li>
              Content quality defects (corruption, missing segments, audio/video
              sync issues)
            </li>
            <li>
              Mislabeled or incorrectly described content not matching purchase
              intent
            </li>
            <li>
              Duplicate purchases made within 24 hours of original transaction
            </li>
            <li>
              Content incompatible with supported devices despite meeting
              specifications
            </li>
          </ul>
        </li>
      </ul>

      <li>
        <span className="font-medium">2. Content-Specific Refund Terms</span>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>
            <strong>Movies & Videos:</strong> Refundable if technical quality
            doesn&apos;t meet HD standards as advertised
          </li>
          <li>
            <strong>E-Books:</strong> Refundable for format incompatibility or
            missing content pages
          </li>
          <li>
            <strong>Audio Books:</strong> Refundable for audio quality issues or
            incomplete recordings
          </li>
          <li>
            <strong>Interactive Media:</strong> Refundable if interactive
            features fail to function properly
          </li>
          <li>
            <strong>Bundle Packages:</strong> Partial refunds available for
            defective items within bundles
          </li>
        </ul>
      </li>

      <li>
        <span className="font-medium">3. Non-Refundable Digital Content</span>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>
            Content successfully downloaded and verified as working correctly
          </li>
          <li>
            Change of mind or preference after successful content delivery
          </li>
          <li>Content viewed, read, or consumed beyond preview limits</li>
          <li>
            Custom or personalized digital content created specifically for
            customer
          </li>
          <li>Gift purchases sent and redeemed by recipients</li>
        </ul>
      </li>

      <li>
        <span className="font-medium">4. Refund Request Process</span>
        <p className="mt-1">To request a digital content refund:</p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>Email: refunds@bakersfield.com.ng</li>
          <li>Technical Support: support@bakersfield.com.ng</li>
          <li>Phone: +234-801-234-5005</li>
          <li>Website: www.bakersfield.com.ng</li>
          <li>Live Chat: 8 AM - 10 PM (WAT)</li>
        </ul>
      </li>

      <li>
        <span className="font-medium">5. Refund Processing Timeline</span>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>Initial review and response within 24 hours</li>
          <li>Technical verification completed within 48 hours</li>
          <li>Approved refunds processed within 3-5 business days</li>
          <li>
            Complex cases may require up to 7 days for thorough investigation
          </li>
          <li>Refund confirmation sent via email with transaction details</li>
        </ul>
      </li>

      <li>
        <span className="font-medium">6. Alternative Resolution Options</span>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>Content replacement with alternative format or quality option</li>
          <li>
            Store credit for future purchases (120% of original purchase value)
          </li>
          <li>Free content upgrade to premium version when available</li>
          <li>Extended download period for technical difficulties</li>
          <li>Complimentary technical support for content optimization</li>
        </ul>
      </li>

      <li>
        <span className="font-medium">7. Content Protection & Fair Use</span>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>
            Refunded content access is automatically revoked upon refund
            approval
          </li>
          <li>
            Downloaded content must be deleted from all devices after refund
          </li>
          <li>Abuse of refund policy may result in account restrictions</li>
          <li>All refunds comply with digital content licensing agreements</li>
        </ul>
      </li>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <h4 className="font-semibold text-xs md:text-sm xl:text-base mb-2">
          Contact Information
        </h4>
        <p className="text-xs md:text-sm xl:text-base">
          For digital content refunds and support:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-xs md:text-sm xl:text-base">
          <li>Bakersfield Elementary Services Limited</li>
          <li>Email: refunds@bakersfield.com.</li>
          <li>Phone: +234-801-234-5005</li>
          <li>Include purchase confirmation and detailed issue description</li>
          <li>Provide screenshots or error messages for technical issues</li>
          <li>
            Submit request within 48 hours of purchase for fastest processing
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RefundPolicy;
