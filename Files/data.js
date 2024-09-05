let selectedIndex = -1  // Default or initial value

function getSelectedIndex() {
  return selectedIndex
}

function setSelectedIndex(index) {
  selectedIndex = index
  return index
}

const modelDescriptions =
[
  {
    'Index': '0',
    'Modelname': '01_Bed',
    'Title': 'Couch',
    'Description': 'The couch is where the patient lies during treatment. It can move along the x, y, and z-axis, and some designs can rotate along each axis. The adjustability helps to ensure that the cancer is targeted as efficiently as possible. Often the patient is set up on the couch as initially planned, and a KV image dataset is obtained. The KV image data obtained is then used to potentially re-adjust the patient to align them to the tumor by moving the couch. Once the patient is moved, another set of images can be collected to verify that the adjustment and treatment can be delivered. Once the treatment is completed, the couch can move the patient away from the Gantry system and be lowered so the patient can safely dismount or be removed from the treatment couch.',
  },

  {
    'Index': '1',
    'Modelname': '02_Klystron_Inside',
    'Title': 'The Linac Stand',
    'Subtitle': 'Klystron or Magnetron',
    'Description': 'A Klystron or Magnetron produces or amplifies the microwaves that power the waveguide. Shown here is a Klystron, often used in linacs that operate at higher (10 MV and above) photon energies. A Klystron is a high-frequency, high-power RF amplifier that produces the driving force for particle accelerators. The Klystron produces electrons by heating a filament inside a cathode, generating a cloud of electrons from a Tungsten filament. After a brief negative pulse to the cathode, the electron cloud is propelled towards the anode and enters a cavity that bunches the electrons, or a buncher cavity. At this point, the energy acquired by the electrons is utilized to amplify the amplitude of a low-power microwave pulse fed into the klystron. \n\n  Magnetrons, not shown here, are compact systems that can produce and amplify the radiofrequency energies for the waveguide. \n\n  RF pulses are typically around 3 Megahertz. In contrast, a typical microwave oven operates at 10 to 20 Megahertz. \n\n <a href="https://pubs.aip.org/aip/adv/article/9/2/025012/1059100/Low-level-RF-control-of-a-klystron-for-medical#" target="_blank">Read more</a> \n\n <a href="■	https://oncologymedicalphysics.com/linac-subsystem-design/" target="_blank">Read more</a>',
  },

  {
    'Index': '2',
    'Modelname': '03_Cooling_system',
    'Title': 'The Linac Stand',
    'Subtitle': 'Cooling System',
    'Description': 'The cooling system provides thermal stability to the linear accelerator. Temperature and pressure levels are monitored in two subsystems. One subsystem is responsible for cooling the accelerator structures, waveguide networks, and RF pulse compressors, while the other subsystem cools the klystron collectors, solenoid coils, and magnets. Each subsystem operates with closed-loop primary and secondary circuits, which remove the thermal load from plate-type heat exchangers. Eventually, the thermal load is dissipated using evaporative cooling towers, which cool the primary side of the water heat exchangers.\n\n <a href="https://link.springer.com/referenceworkentry/10.1007/978-3-540-85516-3_37">Read more</a>',
  },

  {
    'Index': '3',
    'Modelname': '04_Circulator',
    'Title': 'The Linac Stand',
    'Subtitle': 'Circulator',
    'Description': 'The circulator is a device that prevents microwaves from being reflected from the waveguide accelerator and thus inhibits the efficacy of electron acceleration inside the waveguide. It is positioned between the klystron and the waveguide. This inhibition of RF reflection is possible due to the distinctive magnetic properties of ferrites, which, when magnetized appropriately, create a varying phase shift for electromagnetic waves propagating in opposite directions.\n\n <a href="https://accelconf.web.cern.ch/p05/papers/rppe003.pdf"Read more</a>\n\n <a href="■	https://cas.web.cern.ch/sites/default/files/lectures/hamburg-2016/alesini.pdf">Read more</a>',
  },

  {
    'Index': '4',
    'Modelname': '05_Electro_Gun_Split',  //  NEED A MODEL HERE
    'Title': 'The Linac Gantry System',
    'Subtitle': 'Electron Gun',
    'Description': 'The electron gun injects electrons into the accelerating waveguide, eventually producing the clinical radiation beam. It uses a heated cathode to release electrons through thermionic emission (heating metal to over 1000 degrees Celsius). These electrons are then directed towards a grounded perforated anode and focused into a narrow beam at a velocity of about 1/4 of the speed of light. Once the electrons pass through the anode, they enter the accelerating waveguide, where they are subjected to the oscillating electric field that accelerates them to even higher energies approaching about 99% of the speed of light, and get progressively \'heavier\' to move as a result of Einstein\'s E=mc2 famous formula. \n\n <a href="https://oncologymedicalphysics.com/linac-subsystem-design/">Read more</a>',
  },

  {
    'Index': '5',
    'Modelname': '06_Waveguide_Split',
    'Title': 'The Linac Gantry System',
    'Subtitle': 'Waveguide Accelerator',
    'Description': 'After electrons from the electron gun are emitted, the waveguide accelerator accelerates electrons along the length of an evacuated tube. An accelerating waveguide consists of cavities separated by donut-shaped discs. High-frequency RF pulses from the klystron energize the cavities. Through the careful timing of RF pulses between each cavity, each cavity generates an oscillating electric field based on the RF pulses, exerting a force on the electrons, causing them to accelerate through the cavity. Some linac waveguides continuously accelerate electrons as they travel through the cavities (traveling waveguide), like surfing on an ocean wave. Others use reflected microwaves between cavities rapidly to create standing waves (standing waveguide), like how a guitar string vibrates. A standing waveguide, smaller than a traveling waveguide, is shown here and cannot accelerate electrons to high energies (above 10 Mega Electron Volts). The shape and arrangement of the cavities and the electric field pattern determine the path and acceleration of the electrons.\n\n To create a radiation beam that can produce about 5 Gray per minute from a 6 MegaVolt, or 6 MeV, radiation beam (typical of a modern linear accelerator), the average electron beam current needs to be about 125 microAmps, which amounts to about 0.75 kiloWatts of power, which is about the total power consumption in a small LED bulb! But the energy required to power the waveguide is in the range of Millions of Volts. Thus, most of the power needed to generate useable radiation beams is powering the waveguide.\n\n <a href="■	https://www.medicalphysics.org/documents/Mcdermott2_ch9.pdf"Read more</a> \n\n <a href="https://oncologymedicalphysics.com/linac-subsystem-design/">Read more</a>',
  },

  {
    'Index': '6',
    'Modelname': '07_Bending_Magnet',
    'Title': 'The Linac Gantry System',
    'Subtitle': 'Bending Magnet',
    'Description': 'After the radiation beam exits the waveguide, a bending magnet rotates the beam toward a target, like light rays subjected to a convex lens. The one shown here bends the electrons 270 degrees, but it could be 90 or 112.5 degrees depending on the manufacturer. The bending magnets not only ensure the electrons are aimed at the target, but they can also adjust the final energy of the electron beam before they hit the target. The electrons accelerated inside the waveguide are bunched in small bursts, and within each bunch, there are slightly faster and slower electrons. Careful tuning of the bending magnet can \'speed up\' the slower electrons in the bunch and \'slow down\' the faster ones. Thus, the bending magnet focuses on the electrons\' position and can fine-tune their energies. The total energy spread of the electron beam is typically 3 to 10 % of its nominal range, and the physical size of the electron beam is typically 2 to 4 mm in diameter. \n\n <a href="https://aapm.onlinelibrary.wiley.com/doi/full/10.1120/jacmp.v16i3.5139#:~:text=A%20bend%20magnet%20is%20used,to%20produce%20a%20clinical%20beam.">Read more</a>',
  },

  {
    'Index': '7',
    'Modelname': '08_Target',
    'Title': 'The Linac Gantry System',
    'Subtitle': 'Target',
    'Description': 'The target is needed to convert the narrow electron beam, of a diameter of a few millimeters, into a clinically useful photon beam. Electrons are directed to a very dense metal and \'slow down\' because of interactions with the metal\'s nucleus. This slowing down of electrons results in the emission of radiation, a process called bremsstrahlung. Those bremsstrahlung photons are narrow and directed in the same direction as the original electron beam, pointing downwards to the patient. It takes about 1.5 millimeters of Tungsten to stop a 6 MeV electron beam. The resulting radiation beams are highly penetrating, which a theoretical photon beam energy as high as 6 MeV. However, a spectrum of photon energies is generated because the electrons continuously lose energy inside the target. Roughly, the average photon energy is about 1/3 of the incident electron energy (i.e., a 6 MeV beam from the waveguide generates a photon beam with a median photon energy of about 2 MeV). \n\n The target is the first structure that plays a role in affecting the dosage of the radiation.\n\n <a href="https://s3.cern.ch/inspire-prod-files-2/29a689a3c9a1a958a414a2561819cd1e#:~:text=The%20target%20in%20electron%20linear%20accelerator%20plays%20an%20important%20role,have%20influence%20on%20dose%20rate.">Read more</a>',
  },

  {
    'Index': '8',
    'Modelname': '09_Primary_Collimator',
    'Title': 'The Linac Gantry System',
    'Subtitle': 'Primary Collimator',
    'Description': 'The Primary Collimator defines the dispersion angle of the beam of radiation. It may be constructed of depleted uranium as this material is approximately 1.6 times more dense than lead. It is positioned after the electron beam has passed through the X-ray target and reached a vertical orientation. It is made of very dense material and can absorb beams that scatter as the photons move away from the target.',
  },

  {
    'Index': '9',
    'Modelname': '10_Secondary_Collimator',
    'Title': 'The Linac Gantry System',
    'Subtitle': 'Secondary Collimator',
    'Description': 'Beneath the Primary Collimator, there is a Secondary Collimator. It consists of two jaws that can be moved to either enlarge or minimize the size of the treatment field and helps to define the area of the radiation beam further. Like the Primary Collimator, the Secondary Collimator also absorbs excess particles. It further refines the beam shape and is constructed of lead or tungsten.',
  },

  {
    'Index': '10',
    'Modelname': '11_Flatening_Filter',
    'Title': 'The Linac Gantry System',
    'Subtitle': 'Flattening Filter',
    'Description': 'The Flattening Filter is used to reduce and create a uniform radiation dose inside the patient. It is generally made up of aluminum, iron, copper, tungsten, or a mixture of these materials. \n\n Removing the flattening filter increases beam intensity, especially near the central axis. Increased intensity reduces treatment time, especially for high‐dose stereotactic radiotherapy/radiosurgery (SRT/SRS). Furthermore, removing the flattening filter reduces out‐of‐field dose and improves beam modeling accuracy.',
  },

  {
    'Index': '11',
    'Modelname': '12_X_Jaws',
    'Title': 'The Linac Gantry System',
    'Subtitle': 'X Jaws',
    'Description': 'The y Jaws are used to attenuate or reduce the intensity of 99.9% of the radiation beam. They are also used to further restrict the radiation field along the x- and y-axis. They are generally made up of very heavy metals, such as tungsten or lead, and can absorb excess radiation. Some systems have two jaws, whereas others may have only a single jaw and a perpendicular MLC. \n\n <a href="https://digitalcommons.library.tmc.edu/cgi/viewcontent.cgi?referer=&httpsredir=1&article=1191&context=utgsbs_dissertations#:~:text=These%20thick%20jaws%20attenuate%2099.9,to%20an%20existing%20proven%20linac.">Read more</a>',
  },

  {
    'Index': '12',
    'Modelname': '13_Y_Jaws',
    'Title': 'The Linac Gantry System',
    'Subtitle': 'Y Jaws',
    'Description': 'The y Jaws are used to attenuate or reduce the intensity of 99.9% of the radiation beam. They are also used to further restrict the radiation field along the x- and y-axis. They are generally made up of very heavy metals, such as tungsten or lead, and can absorb excess radiation. Some systems have two jaws, whereas others may have only a single jaw and a perpendicular MLC. \n\n <a href="https://digitalcommons.library.tmc.edu/cgi/viewcontent.cgi?referer=&httpsredir=1&article=1191&context=utgsbs_dissertations#:~:text=These%20thick%20jaws%20attenuate%2099.9,to%20an%20existing%20proven%20linac.">Read more</a>',
  },

  {
    'Index': '13',
    'Modelname': '14_MLC',
    'Title': 'The Linac Gantry System',
    'Subtitle': 'MLC',
    'Description': 'Multileaf collimators (MLCs) consist of two collimator banks of thin tungsten leaves, each consisting of 40 to 80 leaves (a total of 80 to 160 leaves). This allows each collimator leaf to move independently under computer control. Multileaf collimators allow even more diverse field shapes to be created, shielding organs at risk while allowing the tumor beds complex shape to be irradiated.',
  },

  {
    'Index': '14',
    'Modelname': '15_KV_Imagine_System',
    'Title': 'The Imagining Systems',
    'Subtitle': 'KV Imagine System (Panel / Source)',
    'Description': 'The kilovoltage, or "KV," Imaging System generates images of the patient before, during, or after radiation treatments, by either providing a simple 2-dimensional image (stationary x-ray source and detector), or a 3-dimensional image, where projections from the x-rays through the patient are collected as it rotates around the patient. On one arm is the X-ray source, and on the other is a panel of X-ray detectors.  In this linac design, a cone beam of X-rays traverses the patient, and photons that did not scatter or absorb inside the patient are detected on the large detector panel.  Sophisticated image reconstruction algorithms are performed rapidly to generate a 3D X-ray cone beam computed tomography image, or cone beam CT. These 2D and 3D images can be taken of the patient immediately before treatment, and those images are compared with reference images obtained during the planning of the patient’s radiation therapy. Some systems can also perform 4D CT images by tracking the respiratory motion of the patient’s tumor and healthy tissue. \n\n <a href="https://www.oncologysystems.com/blog/kv-imaging-systems-for-linear-accelerators#:~:text=kV%20(kilo%20voltage)%20imaging%20systems,gantry%20of%20a%20linear%20accelerator.">Read more</a>',
  },

  {
    'Index': '15',
    'Modelname': '',
    'Title': 'The Imagining Systems',
    'Subtitle': 'Portal Imaging System',
    'Description': 'The radiation beams exiting the patient can be detected from a large panel with special radiation detectors. A 2D image of the radiation port used for treatment can be used to track the treating radiation beam and monitor the targets position during the radiation delivery. These portal imaging systems often consist of solid-state detectors in 2D arrays.',
  },

]

export {modelDescriptions, getSelectedIndex, setSelectedIndex}
