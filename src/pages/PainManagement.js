import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PainManagement({ t }) {
  const [expandedProcedure, setExpandedProcedure] = useState(null);
  const [expandedTreatment, setExpandedTreatment] = useState(null);
  const [showDetails, setShowDetails] = useState({});

  const procedures = [
    // Cervical Spine
    {
      id: 'cervical-epidural',
      name: 'Cervical Epidural Injection',
      category: 'Cervical Spine',
      colorClass: 'bg-[#eeda87] hover:bg-[#e8d273]',
      expandedColorClass: 'bg-[#d9c578]',
      summary: 'Anesthetic and steroid medication is injected into the epidural space in the neck to treat pain caused by irritated spinal nerves, often radiating to the shoulders and arms.',
      detailedDescription: `
        <h4 style="color: #374151; font-weight: 600; margin-top: 16px; margin-bottom: 12px;">What is an Epidural Steroid Injection?</h4>
        <p style="color: #374151; margin-bottom: 16px;">The Epidural Steroid Injection is a procedure where numbing medicine (anesthetic) and anti-inflammatory medicine (steroid) is injected into the epidural space to treat pain caused by irritation of the spinal nerves. A protective covering called dural sac surrounds the spinal cord. This sac contains spinal fluid that bathes and nourishes the spinal cord. The space between the outer surface of the dural sac and the bones of the spinal column is the epidural space. Nerves that go from the spinal cord, through the spinal column and to the body pass through the epidural space. Depending on the location of your pain, the epidural steroid injection can be given in the neck (cervical), middle back (thoracic) or lower back (lumbar).</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Epidural Steroid Injection Procedure Overview</h4>
        <p style="color: #374151; margin-bottom: 16px;">The Epidural Steroid Injection is an outpatient procedure done in the Operating Room or a Special Procedure Room. For your safety and comfort, the doctor may decide to connect you to a monitoring equipment (EKG monitor, blood pressure cuff, and blood oxygen monitoring device). In addition, the doctor or nurse may start an intravenous line and give some medicine to help you relax. Depending on the area to be injected, you will lie on your stomach or sit in a chair. After your skin is cleansed with an antiseptic solution the doctor will inject some numbing medicine that will produce a burning sensation for a few seconds. After the numbing medicine takes effect, the doctor will insert another needle and with the assistance of a special X-ray machine called a fluoroscope, inject a radiopaque dye (cortisone/steroid). It is possible you will feel pain similar to your normal back pain as the medicine is injected. This is a good sign and means the medicine is going to the right place. The pain usually disappears quickly. After the procedure, we ask that you remain at the Clinic until the doctor feels you are ready to leave.</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Procedure Risks</h4>
        <p style="color: #374151; margin-bottom: 12px;">The risks, although infrequent include:</p>
        <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
          <li style="margin-bottom: 4px;">Allergic reaction to the medication</li>
          <li style="margin-bottom: 4px;">Nerve Damage</li>
          <li style="margin-bottom: 4px;">Bruising at the injection site</li>
          <li style="margin-bottom: 4px;">Infection at the injection site</li>
          <li style="margin-bottom: 4px;">Puncture of the dura resulting in a headache</li>
        </ul>
        <p style="color: #374151; margin-bottom: 16px;">If you experience severe back pain, new numbness, weakness of your legs, a headache that will not go away or signs of infection in the area of injection, you should call the doctor immediately.</p>
      `,
    },
    {
      id: 'cervical-facet',
      name: 'Cervical Facet Injection',
      category: 'Cervical Spine',
      colorClass: 'bg-[#eeda87] hover:bg-[#e8d273]',
      expandedColorClass: 'bg-[#d9c578]',
      summary: 'This procedure involves injecting medication into the small facet joints in the neck to diagnose the source of pain and provide relief from inflammation and discomfort.',
      detailedDescription: `
        <h4 style="color: #374151; font-weight: 600; margin-top: 16px; margin-bottom: 12px;">What is a Cervical Facet Joint Injection?</h4>
        <p style="color: #374151; margin-bottom: 16px;">A Cervical Facet Joint Injection is a procedure used to block or reduce pain caused by problems in the cervical (neck) spine. Cervical facet joints—small joints located on either side of each vertebra—help provide stability and guide motion in the neck. When these joints become inflamed, you may experience neck pain that can also radiate into the shoulders, upper back, or arms.</p>
        
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Cervical Facet Joint Injection Procedure Overview</h4>
        <p style="color: #374151; margin-bottom: 16px;">This outpatient procedure is performed in the operating room or a specialized procedure suite. Once you are brought into the room, you will be connected to monitoring equipment (EKG monitor, blood pressure cuff, and oxygen sensor) and positioned lying face down or sitting up, depending on the physician's preference. An intravenous (IV) line may be started to give medication that helps you relax. The skin over your neck will be cleansed with an antiseptic solution, and the doctor will inject numbing medicine into the skin and deeper tissues. This may cause a brief burning or stinging sensation.</p>
        <p style="color: #374151; margin-bottom: 16px;">After the numbing medicine takes effect, the doctor will insert a thin needle and use fluoroscopy (a type of live X-ray) to guide the needle into the correct position. A small amount of contrast dye may be injected to confirm placement. Once the needle is in the proper location, the physician will inject a mixture of anesthetic (numbing medicine) and an anti-inflammatory medication (such as cortisone/steroid). After the procedure, you may be asked to move your neck to see if your usual pain is improved. You will remain at the clinic for a short observation period before being discharged.</p>
        
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Procedure Risks</h4>
        <p style="color: #374151; margin-bottom: 12px;">Although uncommon, risks may include:</p>
        <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
          <li style="margin-bottom: 4px;">Allergic reaction to the medications or contrast dye</li>
          <li style="margin-bottom: 4px;">Nerve irritation or damage</li>
          <li style="margin-bottom: 4px;">Temporary increase in pain</li>
          <li style="margin-bottom: 4px;">Bruising at the injection site</li>
          <li style="margin-bottom: 4px;">Infection at the injection site</li>
        </ul>
      `,
    },
    // Thoracic Spine
    {
      id: 'thoracic-epidural',
      name: 'Thoracic Epidural Injection',
      category: 'Thoracic Spine',
      colorClass: 'bg-[#7cb67a] hover:bg-[#6da468]',
      expandedColorClass: 'bg-[#6da468]',
      summary: 'Medication is injected into the epidural space of the mid-back to treat pain from conditions like herniated discs, spinal stenosis, or shingles.',
      detailedDescription: `
        <h4 style="color: #374151; font-weight: 600; margin-top: 16px; margin-bottom: 12px;">About Thoracic Epidural Injections</h4>
        <p style="color: #374151; margin-bottom: 16px;">A Thoracic Epidural Steroid Injection is a procedure where numbing medicine (anesthetic) and anti-inflammatory medicine (steroid) is injected into the epidural space to treat pain caused by irritation of the spinal nerves in the mid-back. This can be effective for conditions such as herniated discs, spinal stenosis, or post-herpetic neuralgia (shingles pain).</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Procedure Overview</h4>
        <p style="color: #374151; margin-bottom: 16px;">The procedure is performed in an operating room or a special procedure suite with the patient lying face down. After cleansing the skin and applying a local anesthetic to numb the area, a needle is guided into the thoracic epidural space using fluoroscopy (live X-ray). A contrast dye is injected to confirm correct placement, followed by the anesthetic and steroid medication. The procedure typically takes 15-30 minutes, with a short observation period afterward.</p>
      `,
    },
    {
      id: 'intercostal-nerve',
      name: 'Intercostal Nerve Block',
      category: 'Thoracic Spine',
      colorClass: 'bg-[#7cb67a] hover:bg-[#6da468]',
      expandedColorClass: 'bg-[#6da468]',
      summary: 'This injection targets the nerves between the ribs to treat pain in the chest wall, rib cage, or upper abdomen, often caused by injury or shingles.',
      detailedDescription: `
        <h4 style="color: #374151; font-weight: 600; margin-top: 16px; margin-bottom: 12px;">What is an Intercostal Nerve Block?</h4>
        <p style="color: #374151; margin-bottom: 16px;">An intercostal nerve block is the injection of a local anesthetic (like Novocaine) in the area between two ribs where the Intercostal nerve is located. An Intercostal block is performed for the diagnosis and treatment of upper back, flank, or chest pain in the neuropathic (nerve) or somatic in origin. Neuropathic pain sometimes occurs after the nerve has been damaged, such as from shingles, a previous surgical incision, or metastatic cancer eroding into a nerve. Somatic pain can result from metastatic cancer to the rib bones or a previous surgical incision through the wall of the chest, ribs, and muscles. Temporarily blocking or disrupting painful nerve impulses associated with neuropathic pain can result in various degrees of permanent relief. If, after following a single block, you achieve partial permanent relief, a series of several blocks may be performed of which each successive block may give a greater degree of sustained relief.</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Procedure Overview</h4>
        <p style="color: #374151; margin-bottom: 16px;">You may be sitting or lying for the procedure. The area to be injected will be cleansed with an antiseptic. The doctor will place the needle to the intercostal space below the ribs and then inject the local anesthetic or cortisone preparation. After the procedure is complete you will then be asked to turn over on your back and we will observe your vital signs for about 20 minutes and then let you go when your vital signs are stable. If the block is helpful in decreasing your pain, it will probably be repeated in 2-3 weeks.</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Procedure Risks</h4>
        <p style="color: #374151; margin-bottom: 12px;">The risks, although infrequent include:</p>
        <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
          <li style="margin-bottom: 4px;">Pneumothorax (collapsed lung)</li>
          <li style="margin-bottom: 4px;">Systemic toxic reactions (seizures)</li>
          <li style="margin-bottom: 4px;">Bleeding</li>
          <li style="margin-bottom: 4px;">Hemothorax (bleeding in the chest area)</li>
          <li style="margin-bottom: 4px;">Infection</li>
          <li style="margin-bottom: 4px;">Nerve Damage</li>
        </ul>
        <p style="color: #374151; margin-bottom: 16px;">If you notice difficulty in getting your breath or pain upon inspiration, please go directly to your local emergency room and have the physician there give us a call.</p>
      `,
    },
    // Lumbar Spine
    {
      id: 'medial-branch-block',
      name: 'Medial Branch Block with Radiofrequency Ablation',
      category: 'Lumbar Spine',
      colorClass: 'bg-[#85ccd2] hover:bg-[#76b8bd]',
      expandedColorClass: 'bg-[#76b8bd]',
      summary: 'A diagnostic block followed by a procedure that uses heat to interrupt pain signals from the facet joints, providing long-term relief for chronic back pain.',
      detailedDescription: `
        <h4 style="color: #374151; font-weight: 600; margin-top: 16px; margin-bottom: 12px;">What is a Medial Branch Block?</h4>
        <p style="color: #374151; margin-bottom: 16px;">Medial Branch nerves are very small nerve branches that communicate pain caused by the facet joints in the spine. These nerves do not control any muscles or sensation in the arms or legs. They are located along a bony groove in the low back and neck and over a bone in the mid-back. The purpose of the Medial Branch Block procedure is to determine if the facet joints are painful. There are no other tests which give this information. CT scans and MRI scans will not tell if the facet joints are painful. This test is only temporary, but if it shows the joints to be painful, a long-term procedure, radiofrequency ablation, can be performed.</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Procedure Overview</h4>
        <p style="color: #374151; margin-bottom: 16px;">An IV will be started, if necessary, to provide relaxation medication. The patient is placed on the X-ray table and positioned in such a way that the physician, using X-ray guidance, can visualize the bony areas where the Medial Branch nerves pass. The skin is scrubbed with prep solution. Next, a physician numbs a small area of skin with numbing medicine. This medicine stings for several seconds. After the numbing medicine has had time to take effect, the physician uses X-ray guidance to direct a very small needle near the specific nerve being tested. A small amount of contrast (dye) is injected to ensure proper needle position. Then, a small amount of numbing medicine (anesthetic) is injected. This generally does not provoke a patient's usual pain like the joint injections may have.</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Procedure Risks</h4>
        <p style="color: #374151; margin-bottom: 12px;">The risks, although infrequent include:</p>
        <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
          <li style="margin-bottom: 4px;">Allergic reaction to the medication</li>
          <li style="margin-bottom: 4px;">Nerve Damage</li>
          <li style="margin-bottom: 4px;">Bruising at the injection site</li>
          <li style="margin-bottom: 4px;">Infection at the injection site</li>
          <li style="margin-bottom: 4px;">Injection of medication into a blood vessel</li>
        </ul>
      `,
      radiofrequencyDescription: `
        <h4 style="color: #374151; font-weight: 600; margin-top: 16px; margin-bottom: 12px;">What is Radiofrequency Ablation?</h4>
        <p style="color: #374151; margin-bottom: 16px;">Radiofrequency Ablation is a procedure that sends radio waves (heat) through a needle to damage small sensory nerve endings and interrupt pain signals. The procedure is only recommended to those patients who have failed other pain treatment such as nerve blocks and/or medication. Radiofrequency is considered quite effective. Some patients report pain relief up to 2 years after the procedure. Since nerve endings have a tendency to grow back, the pain will probably return at some time in the future. Fortunately, the procedure can be repeated if necessary.</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Procedure Overview</h4>
        <p style="color: #374151; margin-bottom: 16px;">Radiofrequency Ablation is an outpatient procedure, usually done in the operating room or a special procedure room. For your safety and comfort, you will be connected to monitoring equipment (EKG monitor, blood pressure cuff, a blood-oxygen monitoring device). The doctor or nurse may start an intravenous line and give some medicine to help you relax. Depending on the nerves being treated, you will be positioned on your stomach (for nerves in the back) or on your back (for nerves in the neck). The area will be cleansed with an antiseptic solution and the doctor will inject some numbing medicine into the skin that may cause a burning sensation for a few seconds. After the numbing medicine takes effect, with the assistance of a special X-ray machine called a fluoroscope, the doctor will insert a special radiofrequency needle. You will feel some pressure but not pain. After confirming that the needle tip is in position, a special needle tip (electrode) is inserted. Again, the proper location of the needle is confirmed by fluoroscopy. Using electrical stimulation, the doctor will verify the correct placement. You will feel a tingling sensation similar to hitting your "funny bone." You may also experience some muscle twitching. The tissues surrounding the needle tip are then heated with electric current, passed using the radiofrequency machine for 90 to 120 seconds. This will numb the nerves. After the procedure, we ask that you remain at the Clinic until the doctor feels you are ready to leave.</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Procedure Risks</h4>
        <p style="color: #374151; margin-bottom: 12px;">The risks, although infrequent include:</p>
        <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
          <li style="margin-bottom: 4px;">Allergic reaction to the medication</li>
          <li style="margin-bottom: 4px;">Bruising at the injection site</li>
          <li style="margin-bottom: 4px;">Infection at the injection site</li>
          <li style="margin-bottom: 4px;">Damage to nerves or blood vessels near the lesioned nerve</li>
        </ul>
      `,
    },
    {
      id: 'lumbar-epidural',
      name: 'Lumbar Epidural Injection',
      category: 'Lumbar Spine',
      colorClass: 'bg-[#85ccd2] hover:bg-[#76b8bd]',
      expandedColorClass: 'bg-[#76b8bd]',
      summary: 'Medication is delivered into the epidural space of the lower back to relieve pain from sciatica, herniated discs, or other nerve-related conditions.',
      detailedDescription: `
        <h4 style="color: #374151; font-weight: 600; margin-top: 16px; margin-bottom: 12px;">What is an Epidural Steroid Injection?</h4>
        <p style="color: #374151; margin-bottom: 16px;">The Epidural Steroid Injection is a procedure where numbing medicine (anesthetic) and anti-inflammatory medicine (steroid) is injected into the epidural space to treat pain caused by irritation of the spinal nerves. A protective covering called dural sac surrounds the spinal cord. This sac contains spinal fluid that bathes and nourishes the spinal cord. The space between the outer surface of the dural sac and the bones of the spinal column is the epidural space. Nerves that go from the spinal cord, through the spinal column and to the body pass through the epidural space. Depending on the location of your pain, the epidural steroid injection can be given in the neck (cervical), middle back (thoracic) or lower back (lumbar).</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Epidural Steroid Injection Procedure Overview</h4>
        <p style="color: #374151; margin-bottom: 16px;">The Epidural Steroid Injection is an outpatient procedure done in the Operating Room or a Special Procedure Room. For your safety and comfort, the doctor may decide to connect you to a monitoring equipment (EKG monitor, blood pressure cuff, and blood oxygen monitoring device). In addition, the doctor or nurse may start an intravenous line and give some medicine to help you relax. Depending on the area to be injected, you will lie on your stomach or sit in a chair. After your skin is cleansed with an antiseptic solution the doctor will inject some numbing medicine that will produce a burning sensation for a few seconds. After the numbing medicine takes effect, the doctor will insert another needle and with the assistance of a special X-ray machine called a fluoroscope, inject a radiopaque dye (cortisone/steroid). It is possible you will feel pain similar to your normal back pain as the medicine is injected. This is a good sign and means the medicine is going to the right place. The pain usually disappears quickly. After the procedure, we ask that you remain at the Clinic until the doctor feels you are ready to leave.</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Procedure Risks</h4>
        <p style="color: #374151; margin-bottom: 12px;">The risks, although infrequent include:</p>
        <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
          <li style="margin-bottom: 4px;">Allergic reaction to the medication</li>
          <li style="margin-bottom: 4px;">Nerve Damage</li>
          <li style="margin-bottom: 4px;">Bruising at the injection site</li>
          <li style="margin-bottom: 4px;">Infection at the injection site</li>
          <li style="margin-bottom: 4px;">Puncture of the dura resulting in a headache</li>
        </ul>
        <p style="color: #374151; margin-bottom: 16px;">If you experience severe back pain, new numbness, weakness of your legs, a headache that will not go away or signs of infection in the area of injection, you should call the doctor immediately.</p>
      `,
    },
    {
      id: 'lumbar-facet',
      name: 'Lumbar Facet Injection',
      category: 'Lumbar Spine',
      colorClass: 'bg-[#85ccd2] hover:bg-[#76b8bd]',
      expandedColorClass: 'bg-[#76b8bd]',
      summary: 'This injection targets the small facet joints in the lower back, which can become inflamed and cause pain in the back, buttocks, or legs.',
      detailedDescription: `
        <h4 style="color: #374151; font-weight: 600; margin-top: 16px; margin-bottom: 12px;">What is a Lumbar Facet Joint Injection?</h4>
        <p style="color: #374151; margin-bottom: 16px;">The Lumbar Facet Joint Injection is a procedure used to block or decrease pain caused by problems in the lumbar (low-back) spine. Lumbar facet joints, which are not much larger than your thumbnail, are located on either side of each vertebrae. They provide stability and guide motion in the low back. If the joints become inflamed you may experience not only low back pain but also pain in the abdomen, buttocks, groin and legs.</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Lumbar Facet Joint Injection Procedure Overview</h4>
        <p style="color: #374151; margin-bottom: 16px;">The Lumbar Facet Joint Injection is an outpatient procedure performed in the operating room or a special procedure room. When brought to the operating room or special procedure room, you are connected to monitoring equipment (EKG monitor, blood pressure cuff, and a blood oxygen monitoring device), and positioned on your stomach or sitting up. The doctor or nurse may start an intravenous line and give some medicine to help you relax. Your back is cleansed with an antiseptic soap after which the doctor injects numbing medicine deep into your skin and tissue. This will cause a burning sensation for a few seconds.</p>
        <p style="color: #374151; margin-bottom: 16px;">After the numbing medicine takes effect the doctor will insert another needle, and with the assistance of a special x-ray machine called a fluoroscope, inject a radiopaque dye (contrast solution) to confirm needle position. When satisfied with the needle position, the doctor will inject a small mixture of numbing medicine (anesthetic) and an anti-inflammatory medicine (cortisone/steroid). Immediately after the procedure, you will move your lower back to determine if you still have your usual pain. We ask that you remain at the clinic until the doctor feels you are ready to leave.</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Procedure Risks</h4>
        <p style="color: #374151; margin-bottom: 12px;">The risks, although infrequent include:</p>
        <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
          <li style="margin-bottom: 4px;">Allergic reaction to the medication</li>
          <li style="margin-bottom: 4px;">Nerve Damage</li>
          <li style="margin-bottom: 4px;">Bruising at the injection site</li>
          <li style="margin-bottom: 4px;">Infection at the injection site</li>
        </ul>
      `,
    },
    {
      id: 'si-joint',
      name: 'SI Joint Injection',
      category: 'Lumbar Spine',
      colorClass: 'bg-[#e1d6c5] hover:bg-[#d1c6b5]',
      expandedColorClass: 'bg-[#d1c6b5]',
      summary: 'This injection targets the sacroiliac joint, a common source of lower back and buttock pain, to diagnose and treat inflammation and dysfunction.',
      detailedDescription: `
        <h4 style="color: #374151; font-weight: 600; margin-top: 16px; margin-bottom: 12px;">What is a Sacroiliac Joint Block?</h4>
        <p style="color: #374151; margin-bottom: 16px;">A Sacroiliac Joint Block is an injection procedure used to diagnose and treat low back pain associated with injury or disease to the sacroiliac joint. The sacroiliac joints are located in the area of the low back and buttocks where the pelvis joins with the spine. Injury and disease to these joints will cause pain in the low back, buttocks, abdomen, groin, and legs. The medicine injected reduces inflammation and swelling inside the joint space. This may in turn reduce the pain.</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Procedure Overview</h4>
        <p style="color: #374151; margin-bottom: 16px;">The Sacroiliac Joint Block is an outpatient procedure, usually done in the Operating Room or a Special Procedure Room. For your safety and comfort, you will be connected to monitoring equipment (EKG monitor, blood pressure cuff, and a blood-oxygen monitoring device), and positioned on your stomach. The doctor or nurse may start an intravenous line and give some medicine to help you relax. Your back is cleansed with an antiseptic soap after which the doctor injects numbing medicine deep into your skin and tissue. This will cause a burning sensation for a few seconds. After the numbing medicine takes effect, the doctor will insert another needle and, with the assistance of a special X-ray machine called a fluoroscope, inject a radiopaque dye (contrast solution) to ensure the needle is in the proper position. With the needle in position, a small mixture of numbing medicine (anesthetic) and anti-inflammatory medicine (steroid) is injected. Immediately after the procedure, you will get up, walk around, and try to imitate something that would normally bring about your usual pain. We ask that you remain at the Clinic until the doctor feels you are ready to leave.</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Procedure Risks</h4>
        <p style="color: #374151; margin-bottom: 12px;">The risks, although infrequent, include:</p>
        <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
          <li style="margin-bottom: 4px;">Collapsed lung</li>
          <li style="margin-bottom: 4px;">Numbness of an arm that may last for hours</li>
          <li style="margin-bottom: 4px;">Temporary weakness or numbness from the neck down</li>
          <li style="margin-bottom: 4px;">Allergic reaction to the medication</li>
          <li style="margin-bottom: 4px;">Nerve damage</li>
          <li style="margin-bottom: 4px;">Bruising at the injection site</li>
          <li style="margin-bottom: 4px;">Infection at the injection site</li>
          <li style="margin-bottom: 4px;">Injection of medication into a blood vessel.</li>
        </ul>
        <p style="color: #374151; margin-bottom: 16px;">If you experience new shortness of breath 24 – 48 hours after the injection or any signs of infection in the area of the injection you should call the doctor right away.</p>
      `,
    },
    // Joints & Muscles
    {
      id: 'botox-dystonia',
      name: 'Botox for Cervical Dystonia',
      category: 'Joints & Muscles',
      colorClass: 'bg-[#e1d6c5] hover:bg-[#d1c6b5]',
      expandedColorClass: 'bg-[#d1c6b5]',
      summary: 'Botox is injected into the neck muscles to block nerve signals, reducing involuntary muscle contractions and alleviating the pain associated with cervical dystonia.',
      detailedDescription: `
        <h4 style="color: #374151; font-weight: 600; margin-top: 16px; margin-bottom: 12px;">About Botox for Cervical Dystonia</h4>
        <p style="color: #374151; margin-bottom: 16px;">Cervical dystonia, also known as spasmodic torticollis, is a condition that causes involuntary spasming of the neck muscles. Botox is injected into the neck muscles to help them "relax" by blocking the nerve signals that cause the involuntary muscle contractions and reduce neck pain.</p>
      `,
    },
    {
      id: 'trigger-point',
      name: 'Trigger Point Injections',
      category: 'Joints & Muscles',
      colorClass: 'bg-[#e1d6c5] hover:bg-[#d1c6b5]',
      expandedColorClass: 'bg-[#d1c6b5]',
      summary: 'Medication is injected directly into painful muscle knots to relax the tissue, break the cycle of spasms, and provide immediate pain relief.',
      detailedDescription: `
        <h4 style="color: #374151; font-weight: 600; margin-top: 16px; margin-bottom: 12px;">About Trigger Point Injections</h4>
        <p style="color: #374151; margin-bottom: 16px;">Trigger point injections involve the injection of a local anesthetic, sometimes combined with a corticosteroid, directly into painful muscle knots (trigger points). These injections help break the cycle of muscle spasm and pain by numbing the area and reducing inflammation. The procedure is performed using a fine needle and typically takes only a few minutes. Trigger point injections can provide immediate relief and help restore normal muscle function. They are particularly effective for treating myofascial pain syndrome and muscle-related pain in the neck, shoulders, and back.</p>
      `,
    },
    {
      id: 'tmj-injection',
      name: 'Temporomandibular Joint Injection',
      category: 'Joints & Muscles',
      colorClass: 'bg-[#e1d6c5] hover:bg-[#d1c6b5]',
      expandedColorClass: 'bg-[#d1c6b5]',
      summary: 'Anti-inflammatory medication is injected into the jaw joint to reduce inflammation and alleviate pain from TMJ disorders.',
      detailedDescription: `
        <h4 style="color: #374151; font-weight: 600; margin-top: 16px; margin-bottom: 12px;">What is TMJ?</h4>
        <p style="color: #374151; margin-bottom: 16px;">There are two matching temporomandibular joints — one on each side of your head, located just in front of your ears. The abbreviation "TMJ" literally refers to the joint but is often used to mean any disorders or symptoms of this region.</p>
        <p style="color: #374151; margin-bottom: 16px;">Temporomandibular joint and muscle disorders (TMJ disorders) are problems or symptoms of the chewing muscles and joints that connect your lower jaw to your skull.</p>
        
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">TMJ Causes and Risk Factors</h4>
        <p style="color: #374151; margin-bottom: 12px;">Many related symptoms are caused by the effects of physical stress on the structures around the joint. These structures include:</p>
        <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
          <li style="margin-bottom: 4px;">Cartilage disk at the joint</li>
          <li style="margin-bottom: 4px;">Muscles of the jaw, face, and neck</li>
          <li style="margin-bottom: 4px;">Nearby ligaments, blood vessels, and nerves</li>
          <li style="margin-bottom: 4px;">Teeth</li>
        </ul>
        <p style="color: #374151; margin-bottom: 12px;">For many people with temporomandibular joint disorders, the cause is unknown. Some causes given for this condition are not well proven. These include:</p>
        <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
          <li style="margin-bottom: 4px;">A bad bite or orthodontic braces.</li>
          <li style="margin-bottom: 4px;">Stress and tooth grinding. Many people with TMJ problems do not grind their teeth, and many who have been grinding their teeth for a long time do not have problems with their TMJ joint. For some people, the stress associated with this disorder may be caused by the pain as opposed to being the cause of the problem.</li>
        </ul>
        <p style="color: #374151; margin-bottom: 16px;">Poor posture can also be an important factor in TMJ symptoms. For example, holding the head forward while looking at a computer all day strains the muscles of the face and neck. Other factors that might make TMJ symptoms worse are stress, poor diet, and lack of sleep. Many people end up having "trigger points" — contracted muscles in your jaw, head, and neck. Trigger points can refer pain to other areas, causing a headache, earache, or toothache. Other possible causes of TMJ-related symptoms include arthritis, fractures, dislocations, and structural problems.</p>
        
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">TMJ Symptoms</h4>
        <p style="color: #374151; margin-bottom: 12px;">Symptoms associated with TMJ disorders may be:</p>
        <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
          <li style="margin-bottom: 4px;">Biting or chewing difficulty or discomfort</li>
          <li style="margin-bottom: 4px;">Clicking, popping, or grating sound when opening or closing the mouth</li>
          <li style="margin-bottom: 4px;">Dull, aching pain in the face</li>
          <li style="margin-bottom: 4px;">Earache</li>
          <li style="margin-bottom: 4px;">Eye pain</li>
          <li style="margin-bottom: 4px;">Headache</li>
          <li style="margin-bottom: 4px;">Jaw pain or tenderness of the jaw</li>
          <li style="margin-bottom: 4px;">Reduced ability to open or close the mouth</li>
        </ul>
        
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Diagnosing TMJ</h4>
        <p style="color: #374151; margin-bottom: 12px;">A thorough examination may involve:</p>
        <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
          <li style="margin-bottom: 4px;">A dental examination to show if you have poor bite alignment</li>
          <li style="margin-bottom: 4px;">Feeling the joint and connecting muscles for tenderness</li>
          <li style="margin-bottom: 4px;">Pressing around the head for areas that are sensitive or painful</li>
          <li style="margin-bottom: 4px;">Sliding the teeth from side to side</li>
          <li style="margin-bottom: 4px;">Watching, feeling, and listening to the jaw open and shut</li>
          <li style="margin-bottom: 4px;">X-rays to show abnormalities</li>
        </ul>
        <p style="color: #374151; margin-bottom: 16px;">Sometimes, the results of the physical exam may appear normal. Your doctor will also need to consider other conditions, such as infections, ear infections, neuralgias, or nerve-related problems and headaches, as the cause of your symptoms.</p>
        
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">TMJ Treatment</h4>
        <p style="color: #374151; margin-bottom: 12px;">Simple, gentle therapies are usually recommended first.</p>
        <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
          <li style="margin-bottom: 4px;">Learn how to gently stretch, relax, or massage the muscles around your jaw. Your doctor, dentist, or physical therapist can help you with these.</li>
          <li style="margin-bottom: 4px;">Avoid actions that cause your symptoms, such as yawning, singing, and chewing gum.</li>
          <li style="margin-bottom: 4px;">Try moist heat or cold packs on your face.</li>
          <li style="margin-bottom: 4px;">Learn stress-reducing techniques.</li>
          <li style="margin-bottom: 4px;">Exercising several times each week may help you increase your ability to handle pain.</li>
        </ul>
        <p style="color: #374151; margin-bottom: 12px;">Ask your doctor about medications or interventional procedures that can be used:</p>
        <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
          <li style="margin-bottom: 4px;">Short-term use of acetaminophen (Tylenol) or ibuprofen (Advil, Motrin), naproxen (Aleve, Naprosyn), or other nonsteroidal anti-inflammatory drugs</li>
          <li style="margin-bottom: 4px;">Muscle relaxant medicines or antidepressants</li>
          <li style="margin-bottom: 4px;">Synvisc or corticosteroid shots</li>
          <li style="margin-bottom: 4px;">Botox injections to relax trigger points in the head, neck and jaw muscles</li>
        </ul>
        <p style="color: #374151; margin-bottom: 16px;">Mouth or bite guards, also called splints or appliances, have been used since the 1930s to treat teeth grinding, clenching, and TMJ disorders.</p>
        <p style="color: #374151; margin-bottom: 16px;">Failure of more conservative treatments does not automatically mean you need more aggressive treatment. Be cautious about any nonreversible treatment method, such as orthodontics or surgery, that permanently changes your bite.</p>
        <p style="color: #374151; margin-bottom: 16px;">Reconstructive surgery of the jaw, or joint replacement, is rarely required. In fact, studies have shown that the results are often worse than before surgery.</p>
        <p style="color: #374151; margin-bottom: 16px;">See your health care provider right away if you are having trouble eating or opening your mouth. Keep in mind that a wide variety of possible conditions can cause TMJ symptoms, from arthritis to whiplash injuries. We at Mind and Body Pain Clinic can help diagnose and treat TMJ with Dr. Singh's training in orofacial pain.</p>
      `,
    },
    {
      id: 'joint-injection',
      name: 'Joint Injections (Shoulder, Knee, Hip)',
      category: 'Joints & Muscles',
      colorClass: 'bg-[#e1d6c5] hover:bg-[#d1c6b5]',
      expandedColorClass: 'bg-[#d1c6b5]',
      summary: 'Medication is injected directly into a painful joint to reduce inflammation, commonly for conditions like arthritis in the shoulder, knee, or hip.',
      detailedDescription: `
        <h4 style="color: #374151; font-weight: 600; margin-top: 16px; margin-bottom: 12px;">Joint Pain Overview</h4>
        <p style="color: #374151; margin-bottom: 16px;">Some common knee joint pain problems are associated with pain at the side of your knee, at the front of your knee, at the back of your knee or throughout your knee. If you are experiencing side pain then you have likely torn a ligament or the cartilage ring that surrounds your knee. Frontal and back knee pain can be caused by bursitis, fractures, infection, cysts and arthritis. Many times your knee can give out or begin to feel unstable. This is usually due to ligament or tendon problems, dislocated kneacaps, arthritis, and meniscus tears.</p>
        <p style="color: #374151; margin-bottom: 16px;">There are many diseases and other causes for shoulder joint pain. For young adults that experience shoulder problems, such as dislocation, they will need to build up muscle in their shoulder area to prevent this. Tendonitis and bursitis tend to affect your rotator cuff. Arthritis is common in shoulders and if it does occur will most likely affect those over 50 or persons who have had previous surgeries or injuries.</p>
        <p style="color: #374151; margin-bottom: 16px;">Hip pain is another common joint pain problem. The workup of this includes physical examination, X-rays, MRI and blood tests. Once the condition has been diagnosed, treatment of this depends on the cause. This may include medications, physical therapy and possible surgery.</p>
        <p style="color: #374151; margin-bottom: 16px;">There are three types of diseases that affect your ankle joints: ankle sprains, chronic sprains and plantar fasciitis. Ankle sprains are associated with joint pain, swelling and a loss of stability. Sprained ankles occur by turning your ankle inward and tearing a ligament in your ankle. If you have many ankle problems you may need to have your ankle bones pinned as one of the bones in your ankle is not connected but simply sits in place. Ankle joint pain issues are most commonly due to injury.</p>
        <p style="color: #374151; margin-bottom: 16px;">Joint pain that persists after surgical exploration, repair, or replacement is common and is amenable to treatment including prescription medication management, physical therapy and interventions, injections into the joint of numbing medication like Lidocaine, steroid injection and injection of lubricants like Synvisc or Hyalgan are especially helpful in arthritic conditions of the knees and hips.</p>
      `,
    },
  ];

  const toggleProcedure = (procedureId) => {
    const isOpening = expandedProcedure !== procedureId;
    setExpandedProcedure(isOpening ? procedureId : null);
    if (!isOpening) {
      setShowDetails(prev => ({ ...prev, [procedureId]: false }));
    }
  };

  const toggleDetails = (procedureId) => {
    setShowDetails(prev => ({ ...prev, [procedureId]: !prev[procedureId] }));
  };
  
  const toggleTreatment = (treatmentId) => {
    setExpandedTreatment(expandedTreatment === treatmentId ? null : treatmentId);
  };

  const spineProcedures = procedures.filter(p => p.category.includes('Spine'));
  const jointsMusclesProcedures = procedures.filter(p => p.category === 'Joints & Muscles');
  const jointInjections = jointsMusclesProcedures.find(p => p.id === 'joint-injection');
  const otherJointsMusclesProcedures = jointsMusclesProcedures.filter(p => p.id !== 'joint-injection');
  const jointsMusclesMidpoint = Math.ceil(otherJointsMusclesProcedures.length / 2);
  const jointsMusclesCol1 = otherJointsMusclesProcedures.slice(0, jointsMusclesMidpoint);
  const jointsMusclesCol2 = otherJointsMusclesProcedures.slice(jointsMusclesMidpoint);

  const renderProcedureCard = (procedure) => {
    const isLightBg = procedure.category.includes('Spine') || procedure.category === 'Joints & Muscles';
    const isExpanded = expandedProcedure === procedure.id;
    const detailsVisible = showDetails[procedure.id];

    return (
      <div key={procedure.id} className="mb-4">
        <div className={`w-full p-3 text-left rounded-lg shadow-md transition-all duration-300 ${isExpanded ? procedure.expandedColorClass : procedure.colorClass}`}>
          <button
            onClick={() => toggleProcedure(procedure.id)}
            className="w-full flex justify-between items-center"
          >
            <h4 className={`text-sm font-semibold ${isLightBg ? 'text-gray-800' : 'text-white'}`}>{t?.painManagementProcedures?.[procedure.id]?.name || procedure.name}</h4>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${isLightBg ? 'text-gray-600' : 'text-gray-200'} ${isExpanded ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isExpanded && (
            <div className="mt-3 pt-3 border-t border-gray-400/50">
              <p className="text-xs text-gray-700">{t?.painManagementProcedures?.[procedure.id]?.summary || procedure.summary}</p>
              
              <button
                onClick={() => toggleDetails(procedure.id)}
                className="text-xs font-semibold text-teal-700 hover:underline mt-3"
              >
                {detailsVisible ? (t?.painManagementBody?.readLess || 'Read Less') : (t?.painManagementBody?.readMore || 'Learn More')}
              </button>

              {detailsVisible && (
                <div className="mt-4">
                  {procedure.image && <img src={procedure.image} alt={procedure.imageAlt} className="w-full max-w-md h-auto object-contain rounded-lg shadow-md mx-auto mb-4" />}
                  <div className={`prose max-w-none text-xs prose-headings:text-xs prose-headings:font-semibold prose-headings:text-gray-700 prose-headings:mt-4 prose-headings:mb-3 prose-headings:first:mt-2 prose-p:text-gray-700 prose-p:mb-4 prose-ul:text-gray-700 prose-li:text-gray-700 prose-ul:mb-4 prose-li:mb-1`} dangerouslySetInnerHTML={{ __html: (t?.painManagementProcedures?.[procedure.id]?.detailedDescription || procedure.detailedDescription) }}></div>
                  {procedure.radiofrequencyDescription && (
                      <div className={`mt-4 prose max-w-none text-xs prose-headings:text-xs prose-headings:font-semibold prose-headings:text-gray-700 prose-headings:mt-4 prose-headings:mb-3 prose-headings:first:mt-2 prose-p:text-gray-700 prose-p:mb-4 prose-ul:text-gray-700 prose-li:text-gray-700 prose-ul:mb-4 prose-li:mb-1`} dangerouslySetInnerHTML={{ __html: (t?.painManagementProcedures?.[procedure.id]?.radiofrequencyDescription || procedure.radiofrequencyDescription) }}></div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="relative bg-cover bg-center text-white py-40 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/painhero.jpg'})` }}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-4xl mx-auto text-right">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-md">
            {t?.painManagementPage?.heroTitle || 'Pain Management'}
          </h1>
          <p className="text-xl sm:text-2xl drop-shadow-md ml-auto">
            {t?.painManagementPage?.heroSubtitle || 'Specialized procedures for targeted pain relief.'}
          </p>
        </div>
      </section>
      
      {/* Updated Understanding Pain Section */}
      <section className="pt-20 pb-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Three-column layout for Acute, Chronic, and Image */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t?.painManagementBody?.acuteTitle || 'Acute Pain'}</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                {t?.painManagementBody?.acuteDesc || 'Acute pain typically develops suddenly after an injury, surgery, or flare-up of a condition such as a herniated disc or joint inflammation. It is often sharp, intense, and directly linked to tissue damage or irritation. In many cases, acute pain improves as the underlying issue heals. At our clinic, we use targeted treatments such as epidural steroid injections, nerve blocks, and joint injections to reduce inflammation and provide rapid relief, helping patients regain mobility and function while their body recovers.'}
              </p>
            </div>
              <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t?.painManagementBody?.chronicTitle || 'Chronic Pain'}</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                {t?.painManagementBody?.chronicDesc || 'Chronic pain is pain that lasts longer than three months and may continue even after the original injury has healed. It often arises from ongoing spine and joint problems like arthritis, degenerative disc disease, or nerve irritation. Unlike acute pain, chronic pain can interfere with daily activities, sleep, and overall quality of life. Our clinic offers advanced options such as medial branch blocks, radiofrequency ablation (denervation), and regenerative therapies to help break the cycle of persistent pain. By addressing the nerves and structures that generate pain, we aim to restore function and improve long-term comfort.'}
              </p>
                          </div>
            <div className="flex justify-center items-center h-full">
              <img src={process.env.PUBLIC_URL + '/lumbarmri.jpg'} alt="Lumbar MRI showing spine" className="rounded-lg shadow-md object-cover w-full h-80" />
                          </div>
                        </div>
                      </div>
      </section>

      <section className="pt-10 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center tracking-wide">
            {t?.painManagementBody?.treatmentsProcedures || 'Treatments & Procedures'}
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="max-w-xs mx-auto mt-24">
              <img src={process.env.PUBLIC_URL + '/spine.jpg'} alt="Human Spine" className="rounded-lg shadow-md w-3/4 mx-auto" />
            </div>
            
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t?.painManagementBody?.spineProcedures || 'Spine Procedures'}</h3>
              {spineProcedures.map(renderProcedureCard)}
                  </div>
              </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t?.painManagementBody?.jointsMuscles || 'Joints & Muscles'}</h3>

            {/* Joint Pain Information Section */}
            <div className="mb-12 w-full">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 items-start mb-6">
                  {/* Left side - Text content */}
                  <div className="text-left">
                    <div className="text-gray-700 leading-relaxed mb-6 text-sm">
                      <p className="mb-4">
                        {t?.painManagementBody?.jointIntro1 || 'There are many possible causes of joint pain, and any joint in the body can be affected. Some joint issues are minor and respond well to simple treatments, while others may indicate more serious underlying conditions. Arthritis is one of the most common causes of joint pain, though active individuals may also experience discomfort related to muscle or ligament strain.'}
                      </p>
                      <p className="mb-4">
                        {t?.painManagementBody?.jointIntro2 ? (
                          <>
                            {t.painManagementBody.jointIntro2.split('joint injections').join('<strong>joint injections</strong>')}
                          </>
                        ) : (
                          <>
                            Our clinic specializes in <strong>joint injections</strong>, a targeted treatment in which medication is injected directly into the affected joint to reduce inflammation and relieve pain.
                          </>
                        )}
                      </p>
                      <div className="mb-4 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border-l-4 border-teal-500">
                        <p className="mb-3 font-semibold text-teal-800">{t?.painManagementBody?.weCommonlyTreat || 'We commonly treat:'}</p>
                        <div className="grid grid-cols-2 gap-4">
                          {/* Left Column */}
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <svg className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                              <span className="font-medium text-gray-800">{t?.painManagementBody?.shoulderInjections || 'Shoulder injections'}</span>
                            </li>
                            <li className="flex items-center">
                              <svg className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                              <span className="font-medium text-gray-800">{t?.painManagementBody?.hipInjections || 'Hip injections'}</span>
                            </li>
                            <li className="flex items-center">
                              <svg className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                              <span className="font-medium text-gray-800">{t?.painManagementBody?.kneeInjections || 'Knee injections'}</span>
                            </li>
                          </ul>

                          {/* Right Column */}
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <svg className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                              <span className="font-medium text-gray-800">{t?.painManagementBody?.elbowInjections || 'Elbow injections'}</span>
                            </li>
                            <li className="flex items-center">
                              <svg className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                              <span className="font-medium text-gray-800">{t?.painManagementBody?.variousOtherJointInjections || 'Various other joint injections'}</span>
                            </li>
                          </ul>
                        </div>
                        <p className="mt-4 text-teal-700 font-medium text-center">{t?.painManagementBody?.helpRelieve || 'to help relieve pain and restore mobility.'}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setExpandedTreatment(expandedTreatment === 'joint-info' ? null : 'joint-info')}
                      className="text-teal-600 font-semibold hover:underline text-sm"
                    >
                      {expandedTreatment === 'joint-info' ? (t?.painManagementBody?.readLess || 'Read Less') : (t?.painManagementBody?.readMore || 'Learn More')}
                    </button>
                  </div>

                  {/* Right side - Image */}
                  <div className="flex justify-center items-start">
                    <img
                      src={process.env.PUBLIC_URL + '/jointinjectionsample.jpg'}
                      alt="Joint injection procedure illustration"
                      className="rounded-lg shadow-md w-full max-w-md h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Expanded content - spans full width */}
                {expandedTreatment === 'joint-info' && jointInjections && (
                  <div className="mt-8">
                    <div className="prose max-w-none text-sm prose-headings:text-sm prose-headings:font-semibold prose-headings:text-gray-700 prose-p:text-gray-700 prose-ul:text-gray-700 prose-li:text-gray-700" dangerouslySetInnerHTML={{ __html: (t?.painManagementProcedures?.['joint-injection']?.detailedDescription || jointInjections.detailedDescription) }}></div>
                  </div>
                )}
              </div>
            </div>

            {/* Other Joints & Muscles Treatments */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">{t?.painManagementBody?.otherJointMuscle || 'Other Common Joint & Muscle Injections'}</h4>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  {jointsMusclesCol1.map(renderProcedureCard)}
                </div>
                <div>
                  {jointsMusclesCol2.map(renderProcedureCard)}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="p-6 bg-gray-50 rounded-lg text-center shadow-inner">
              <p className="text-gray-700 leading-relaxed">
                {t?.painManagementBody?.extensiveListPrefix || 'For an extensive list of treatments performed at the clinic,'}{' '}
                <Link to="/all-treatments" className="text-teal-600 font-semibold hover:underline">
                  {t?.painManagementBody?.extensiveListCta || 'click here'}
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-20 bg-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t?.painManagementBody?.treatmentOptions || 'Treatment Options'}</h2>
              <p className="text-sm text-gray-300 max-w-4xl mx-auto">
                {t?.painManagementBody?.treatmentOptionsIntro || 'Many of our procedures can be performed using either steroid injections or PRP (Platelet-Rich Plasma) therapy, depending on your specific condition and treatment goals.'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Steroid Injection Card */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t?.painManagementBody?.steroidTitle || 'Steroid Injections'}</h3>
                <img src={process.env.PUBLIC_URL + '/steroid.jpg'} alt="Steroid Injection Diagram" className="w-48 h-auto rounded-lg object-contain float-right ml-4 mb-4" />
                <div className="text-gray-700 text-sm space-y-4">
                  <p>
                    {t?.painManagementBody?.steroidDesc1 || 'Corticosteroid injections are a common treatment used to provide fast and effective relief from pain caused by inflammation in the spine or joints. Inflammation is often the source of pain when nerves, discs, or joint spaces become irritated and swollen. By delivering medication directly to the affected area, corticosteroid injections help reduce this irritation, allowing the surrounding tissues to calm down and function more normally.'}
                  </p>
                  {expandedTreatment === 'steroid' && (
                    <p>
                      {t?.painManagementBody?.steroidDesc2 || 'These injections are particularly helpful for conditions such as herniated discs or inflammation in the facet or sacroiliac joints. They can significantly improve quality of life by breaking the cycle of pain and inflammation. For patients who respond well, corticosteroid injections can be repeated on a limited basis as part of a broader pain management plan tailored to their needs.'}
                    </p>
                  )}
                </div>
                <button onClick={() => toggleTreatment('steroid')} className="text-teal-600 font-semibold text-sm mt-4 self-start clear-right">
                  {expandedTreatment === 'steroid' ? 'Read Less' : 'Read More'}
                </button>
              </div>

              {/* PRP Therapy Card */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t?.painManagementBody?.prpTitle || 'PRP Therapy'}</h3>
                <img src={process.env.PUBLIC_URL + '/PRP.jpg'} alt="PRP Therapy Diagram" className="w-48 h-auto rounded-lg object-contain float-right ml-4 mb-4" />
                <div className="text-gray-700 text-sm space-y-4">
                  <p>
                    {t?.painManagementBody?.prpDesc1 || 'Platelet-Rich Plasma (PRP) therapy is a regenerative treatment that uses your body’s own natural healing abilities to repair damaged tissues and reduce pain. The process begins with a small sample of your blood, which is placed in a centrifuge and spun to concentrate the platelets. These platelets are rich in growth factors — powerful proteins that stimulate tissue repair, reduce inflammation, and support healing in joints, ligaments, tendons, and discs. By injecting this concentrated solution directly into the injured or painful area, PRP helps the body accelerate its natural recovery process.'}
                  </p>
                  {expandedTreatment === 'prp' && (
                    <p>
                      {t?.painManagementBody?.prpDesc2 || 'PRP is designed to promote true healing at the cellular level. This makes it especially helpful for patients with chronic conditions. Because the treatment relies on your body’s biology, results are not immediate. Most patients begin to notice gradual improvements in pain and function within 2–6 weeks, with continued benefits developing over several months.'}
                    </p>
                  )}
                </div>
                <button onClick={() => toggleTreatment('prp')} className="text-teal-600 font-semibold text-sm mt-4 self-start clear-right">
                  {expandedTreatment === 'prp' ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          </div>
      </section>
 
      <section className="py-20 bg-white">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-teal-50 border-l-4 border-teal-500 p-8 text-center rounded-r-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t?.painManagementBody?.readyTitle || 'Ready for Your Procedure?'}</h2>
              <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-8">
                {t?.painManagementBody?.readyDesc || 'Please review our pre-operative instructions to ensure you are fully prepared for your appointment.'}
              </p>
              <Link 
                to="/pre-operative-instructions" 
                className="inline-block bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition-colors text-sm"
              >
                {t?.painManagementBody?.viewPreOp || 'View Pre-Operative Instructions'}
              </Link>
            </div>
          </div>
      </section>
    </>
  );
}

export default PainManagement;
