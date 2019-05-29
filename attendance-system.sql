-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 27, 2019 at 07:32 AM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `attendance-system`
--

-- --------------------------------------------------------

--
-- Table structure for table `added_courses`
--

CREATE TABLE `added_courses` (
  `added_id` bigint(20) NOT NULL,
  `course_code` varchar(255) NOT NULL,
  `admin_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `added_courses`
--

INSERT INTO `added_courses` (`added_id`, `course_code`, `admin_id`) VALUES
(13, 'ECE571', 1),
(15, 'ECE573', 1);

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` bigint(20) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `department` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `fullname`, `password`, `email`, `department`) VALUES
(1, 'Engr. V.C CHIJINDU', 'fe703d258c7ef5f50b71e06565a65aa07194907f', 'chijindu.vincent@unn.edu.ng', 'Electronic Engineering');

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `attendance_id` bigint(20) NOT NULL,
  `student_reg_no` varchar(15) NOT NULL,
  `course_code` varchar(20) NOT NULL,
  `date` varchar(150) NOT NULL,
  `qrtime` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`attendance_id`, `student_reg_no`, `course_code`, `date`, `qrtime`) VALUES
(12, '2013/187238', 'ECE573', '1533629108', '1533629070'),
(15, '2013/188433', 'ECE571', '1533731484', '1533730792');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `course_id` bigint(20) NOT NULL,
  `course_code` varchar(15) NOT NULL,
  `course_title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`course_id`, `course_code`, `course_title`) VALUES
(1, 'ECE573', 'SOFTWARE ENGINEERING'),
(2, 'ECE571', 'MICROPROCESSOR SYSTEMS');

-- --------------------------------------------------------

--
-- Table structure for table `generated_qr`
--

CREATE TABLE `generated_qr` (
  `qr_id` int(11) NOT NULL,
  `qr_text` text NOT NULL,
  `course` varchar(150) NOT NULL,
  `date` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `generated_qr`
--

INSERT INTO `generated_qr` (`qr_id`, `qr_text`, `course`, `date`) VALUES
(48, 'ssss ECE573 Tue Aug 07 2018 09:04:29 GMT+0100 (West Africa Standard Time)', 'ECE573', '1533629070'),
(51, 'hdhdhhd ECE571 Wed Aug 08 2018 13:19:52 GMT+0100 (West Africa Standard Time)', 'ECE571', '1533730792');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` bigint(20) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `reg_no` varchar(12) NOT NULL,
  `department` varchar(255) DEFAULT NULL,
  `password` text NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `fullname`, `reg_no`, `department`, `password`, `email`, `phone`) VALUES
(18, 'Udoka Jane', '2013/188433', 'Electronic Engineering', '5e9ac2083e64e4f62ed39f30135a46e31ddd8a7f', 'jane.udoka.188433@unn.edu.ng', '0810002002020'),
(21, 'Apeh Ikechukwu', '2013/187238', 'Electronic Engineering', 'e63e6ab389ad6a255bdb1e3bfa55884ffcab5b45', 'fghjk@gmail.comj', '1234567876'),
(22, 'AGBO HENRY CHIDI', '2013/186881', 'Electronic Engineering', '44ad4e3d6eba19c2c3b734b23c175de7b54ef2f8', NULL, NULL),
(23, 'AGBO JUDE CHINEDU', '2013/186843', 'Electronic Engineering', '74d52475956497b2527695ed25071459bdf1fd35', NULL, NULL),
(24, 'AGBO SAMUEL E.', '2013/187094', 'Electronic Engineering', 'ffc5345a15512310569192aa3e1b140c9fed5ea4', NULL, NULL),
(25, 'AGBOEZE INNOCENT NNAEMEKA', '2014/192531', 'Electronic Engineering', '6c04f3587091da4bbcc2678bbbd592c88f5891a9', NULL, NULL),
(26, 'AGU JAMES IFEANYICHUKWU', '2013/187469', 'Electronic Engineering', 'd0144f1ea8082fe4617c106ae1d21624858fb976', NULL, NULL),
(27, 'AKAH UCHECHI A.', '2013/187445', 'Electronic Engineering', '39cee68ee0446b7428cd30926b9111f12b57d924', NULL, NULL),
(28, 'ALI TOCHUKWU THOMAS', '2013/187410', 'Electronic Engineering', '63607099a57e0e40fed48e8b6639664a08a1249c', NULL, NULL),
(29, 'ANEKE CHUKWUDIMMA A.', '2013/186383', 'Electronic Engineering', 'f648bd00e866cb9b41b42ef42ae519ca71af720c', NULL, NULL),
(30, 'ANEKE KINGSLEY KOSISOCHUKWU', '2013/186328', 'Electronic Engineering', 'e49a331a6e17193b87f6d872896ccf16ee4f3424', NULL, NULL),
(31, 'ANI CHIZARAOKU', '2013/187079', 'Electronic Engineering', 'f7c48c76a8694d157bc2b920fc6443a127ee4187', NULL, NULL),
(32, 'ANIDOBE CHISOM S.', '2013/187476', 'Electronic Engineering', '9a8d78a11ec574c30002655aa3cf9ee7a6a57f24', NULL, NULL),
(33, 'ANIESODO GODWIN IKECHUKWU', '2013/186860', 'Electronic Engineering', '6d3dbd7dec5d252ed046e64e5ad6cca88dc4e428', NULL, NULL),
(34, 'APEH CELESTINA CHIDIEBERE', '2013/187234', 'Electronic Engineering', '65d39c9b15967286024e3e634620548cb4c5e29c', NULL, NULL),
(35, 'APIAKASON OLIVER CHIBUIKE', '2013/187097', 'Electronic Engineering', '8fe69fd25f074b1ac673e269a5fade6d514fb1a8', NULL, NULL),
(36, 'AROH NGOZIKA IFUNANYA', '2013/188406', 'Electronic Engineering', 'a5ac436c7fdf2c691badccb565e53f0f7e839667', NULL, NULL),
(37, 'ASOGWA JOSHUA KADIZUO', '2013/187473', 'Electronic Engineering', 'fb1ba968e45606ffb9c2e326cee91a6a44a356e2', NULL, NULL),
(38, 'ASOGWA PAUL IKENNA', '2013/188094', 'Electronic Engineering', '45b65748a779086e72bc4548fe179dfd4d87639d', NULL, NULL),
(39, 'AWAM VICTOR AARON', '2013/186864', 'Electronic Engineering', '473b22d06206408e865b96d128df4303058dd123', NULL, NULL),
(40, 'CHUKWU NGOZI CHARITY', '2013/187649', 'Electronic Engineering', '7293a0ec7022589b8ad7e3cbcc02441b6e1ff5b5', NULL, NULL),
(41, 'CHUKWU OKWUCHUKWU', '2013/188425', 'Electronic Engineering', 'f78a4d0bb4f6dc3452137f46c365ce920b32a840', NULL, NULL),
(42, 'CHUKWUNTA JOACHIM', '2013/186574', 'Electronic Engineering', 'f1e0068d35abf66452aa25dedf01b9001acab0bf', NULL, NULL),
(43, 'COLLINS CHINWE ESTHER', '2012/185546', 'Electronic Engineering', 'ce13643ffcf0c637b94cbacdcdb0c2d17a733171', NULL, NULL),
(44, 'ECHEZONA CHIGBO ALEX', '2013/186326', 'Electronic Engineering', '5a1ff16414f20ed95632170b61efd75e397ae77b', NULL, NULL),
(45, 'EKWO AMARACHI VIRGINIA', '2013/189008', 'Electronic Engineering', '13f7046913d4fd43d04d94605a5634b9e176c020', NULL, NULL),
(46, 'EWUZIE JULIET', '2013/186329', 'Electronic Engineering', 'c08264508de8a3ddddbbb3ac80e3361ac567eac6', NULL, NULL),
(47, 'EZE FLORENCE IFEYINWA', '2012/183476', 'Electronic Engineering', '6de460394e2480c521e5900ef855fba0f3b6a7b6', NULL, NULL),
(48, 'EZE HILLARY OLUCHUKWU', '2013/188969', 'Electronic Engineering', 'c9e67e34df1e2ceea19e3d7cacf7318eb449156b', NULL, NULL),
(49, 'EZE JOSEPHAT CHINEDU', '2013/186846', 'Electronic Engineering', '8977b993107b8559b597e3eeade16e4e179b8896', NULL, NULL),
(50, 'EZE OBINNA CHRISTIAN', '2013/186325', 'Electronic Engineering', 'b94c93e56de2c470d18168e6e142b049847d0b6c', NULL, NULL),
(51, 'EZEA CHIGOZIE ABEL', '2013/187656', 'Electronic Engineering', 'e9a7325f38caa65b504807e0224f7499efc8d3a8', NULL, NULL),
(52, 'EZEH ATLANTA ONYEDIKACHI', '2013/189251', 'Electronic Engineering', '56cc46cf82ddc125d9b16d2514ebee9c08f1bcca', NULL, NULL),
(53, 'EZEH SAMPSON TOCHUKWU', '2013/188968', 'Electronic Engineering', 'caa811beaebaed7a460edffe3bd9c32f44efd028', NULL, NULL),
(54, 'EZEMA EZIHE D.', '2013/186839', 'Electronic Engineering', 'e3aec395fbcd92bfd9a8880310f346538fd64bc8', NULL, NULL),
(55, 'GODKNOWS HOPE GEORGE', '2014/194988', 'Electronic Engineering', '665e144d1d8ecee5458ee5d6e24cec69cfa1d329', NULL, NULL),
(56, 'HARUNA DAMILOLA RUTH', '2013/189010', 'Electronic Engineering', '62dad26657033c86af517622403f97f2ed5e3a7b', NULL, NULL),
(57, 'IBEH IFEANYI', '2013/187440', 'Electronic Engineering', '0919a9526137f8ea2f655eb484535ad2650c4e80', NULL, NULL),
(58, 'IGWE MIRACLE CHINONSO', '2013/186871', 'Electronic Engineering', 'e5bfe6e11b549b240c91089dc9e8f4446d46ba97', NULL, NULL),
(59, 'IGWEBUIKE SIMON OGBONNA', '2013/188967', 'Electronic Engineering', '893086758fcaa52634f33b9d6c583ddbe03b1f94', NULL, NULL),
(60, 'ILOH VICTOR IHECHIRULU', '2013/186853', 'Electronic Engineering', '10b05664dbe02ec83a97a0043d75b05dd0c9c8b4', NULL, NULL),
(61, 'IROH OBINNA KINGSLEY', '2013/186841', 'Electronic Engineering', '193666082a4b443951f7b617e20eaf2f921f5e48', NULL, NULL),
(62, 'JOHN LAZARUS', '2013/186330', 'Electronic Engineering', '03e5f87859fcc8c2fea3ad6f8c0a2b3ac9c19b40', NULL, NULL),
(63, 'MADU IKENNA', '2013/186327', 'Electronic Engineering', 'b6cb9a3eacfad90d63f2702f1b8b605a5810c368', NULL, NULL),
(64, 'MAMAH RACHAEL', '2013/186835', 'Electronic Engineering', '648f3a4078584cd687152c587ba6d1b22d02b2bd', NULL, NULL),
(65, 'MICHAEL MAXWELL C.', '2013/187083', 'Electronic Engineering', 'cdebbf568f1f2c854d1bb1ca58ebc5d9c5ee6637', NULL, NULL),
(66, 'NDUAGBUBA KINGSLEY C.', '2013/186867', 'Electronic Engineering', '26fbe17070b4556392b6d16ebd41a2d33616bb58', NULL, NULL),
(67, 'NJOKU CHUKWUEBUKA', '2014/197073', 'Electronic Engineering', '73b3d5eda7be76d57d288a6b95ca05b527f4dc7e', NULL, NULL),
(68, 'NNADI IFEANYI JOSEPH', '2013/187423', 'Electronic Engineering', '111ad6c2d4c13f5b36029075a1ffe1c1c86d9f31', NULL, NULL),
(69, 'NNAMANI CHIJINDU IKENNA', '2013/187441', 'Electronic Engineering', '706f46e53ca19928ef1654a695dbfb85eedd8f83', NULL, NULL),
(70, 'NNOLUM ESTHER O.', '2013/187086', 'Electronic Engineering', '3e341d967cee6aa5a2381ffc25744428fe07b3ae', NULL, NULL),
(71, 'NOSIKE CHUKWUDI C.', '2013/186856', 'Electronic Engineering', '9e25c11d52eb8493b224d40627b50ff4bdde1b18', NULL, NULL),
(72, 'NWADIJE MMADUABUCHI\nMIRACLE', '2013/189018', 'Electronic Engineering', 'a315a6b7a1cbb60f1ae2c61be81469a292133bbf', NULL, NULL),
(73, 'NWAGU CHUKWUEMEKA G.', '2013/187248', 'Electronic Engineering', '152fc99321386a73ca988da4130fbdec37633825', NULL, NULL),
(74, 'NWANKWO GODSWILL M', '2011/177220', 'Electronic Engineering', '19f12af64952e1354830ce82a14ff1253af68c4b', NULL, NULL),
(75, 'NWOKO TOCHUKWU\nKECHUKWU', '2013/186873', 'Electronic Engineering', '0cf79d88f5d8ecb8e9003afbecde343605682032', NULL, NULL),
(76, 'NWOKOCHA ENYINAYA K.', '2012/185793', 'Electronic Engineering', '17d7ad59e1a004c0391c70323b011bcf68cca239', NULL, NULL),
(77, 'OBINWA CHIMAMAKA\nMMESOMA', '2013/187654', 'Electronic Engineering', '9cc8dc7e06e0ba067e84e08a510e39b60c76e1a5', NULL, NULL),
(78, 'ODENIGBO NZUBECHUKWU J.', '2013/187236', 'Electronic Engineering', '4a76f22000926e27cd7d3088b33f41e46694114f', NULL, NULL),
(79, 'ODO NELSON CHINEDU', '2013/187099', 'Electronic Engineering', '1e442c0aa37dd4cfeb572032668f7627004cc44c', NULL, NULL),
(80, 'OFOEGBU UGOCHUKWU. V', '2013/190737', 'Electronic Engineering', 'd609a6c28952e65c02551db0b6edb97cc123856e', NULL, NULL),
(81, 'OGBONNA VITALIS C.', '2013/186878', 'Electronic Engineering', '92fdc6b91aa2e4f509fcc760c6b0883a5718e496', NULL, NULL),
(82, 'OGBU GODSWILL IFEBUCHE', '2013/188952', 'Electronic Engineering', 'a4d34b971e548bdadd115114c26b95fa7ac0c9de', NULL, NULL),
(83, 'OGUAMANAM VICTOR AKACHI', '2013/190842', 'Electronic Engineering', 'b129676df67e7ee67b70f65d4180cac79cbeb8e5', NULL, NULL),
(84, 'OJIAKU CHIDERA FRANCIS', '2013/188963', 'Electronic Engineering', '4ef15151458cb73400a74afa5f899b4184e37c26', NULL, NULL),
(85, 'OJILI ARINZE JOACHIM', '2013/187430', 'Electronic Engineering', '2fe6da9f11120c9180c102d562242e680d4bca57', NULL, NULL),
(86, 'OKAFOR CHINENYE LILIAN', '2013/187661', 'Electronic Engineering', '3f29fa0a574ae2c6134a793124a36d4a5297855c', NULL, NULL),
(87, 'OKAFOR JOSEPH CHIDUBEM', '2013/187302', 'Electronic Engineering', 'ff4cef49654db5262e8b67772bed431373795b7a', NULL, NULL),
(88, 'OKOKO CHIBUZOR PETER', '2014/193144', 'Electronic Engineering', '021ecb228c9655b5ed97230707e3c73a7ec6fc05', NULL, NULL),
(89, 'OKOLO CHUKWUDI C.', '2013/187468', 'Electronic Engineering', 'b89e0e5b68cc0843f6387be3bf3667117158b70a', NULL, NULL),
(90, 'OKORIE TOCHUKWU DADDYSON', '2013/186876', 'Electronic Engineering', 'f72337ae56df9f058b85e78e8bc357028ab9c7c2', NULL, NULL),
(91, 'OKOYE JACHIKE E.', '2013/188058', 'Electronic Engineering', '2efb44199b7447af0802cb71c75f7d40086ae4b6', NULL, NULL),
(92, 'OKOYE JEROME CHUKWUNOSO', '2013/189405', 'Electronic Engineering', 'c6cfbcab231627cee1285f17e0591a505aaa0ca9', NULL, NULL),
(93, 'OKWOR CHINWEOKE C.', '2013/187091', 'Electronic Engineering', '584277ba16e6efda185842eecc41ec6ebdc7e46e', NULL, NULL),
(94, 'OLOTO CHIEMEZIE KENNETH', '2013/186334', 'Electronic Engineering', 'e948b713829e7d302c2715f2a2939dc150668211', NULL, NULL),
(95, 'OMEYE DECLAN EBUBE', '2013/188977', 'Electronic Engineering', '269e69786323b512d98f695933e4256ebcc5cce0', NULL, NULL),
(96, 'ONUIGBO CHINEDU BASIL', '2013/187658', 'Electronic Engineering', 'd8c1062e41689cce0147315dad7c2a13655e23bc', NULL, NULL),
(97, 'ONUOHA CHINAZA INNOCENT', '2013/186879', 'Electronic Engineering', '1d3e55ce4545a1d63307b3604cdf836de92668df', NULL, NULL),
(98, 'ONUOHA VICTOR CHINDUBEM', '2013/188076', 'Electronic Engineering', '6b1902f6cd46de10ff8900adfbd2c2c67c244021', NULL, NULL),
(99, 'OSSAI MICHAEL ABUCHI', '2013/187434', 'Electronic Engineering', 'ba54b09e069b732c4694480927d959ab54d035ce', NULL, NULL),
(100, 'UDUJI CHIKORDI JOSEPH', '2013/188410', 'Electronic Engineering', '6e67d16b74559f16e375b48236faf664cc623713', NULL, NULL),
(101, 'UFERE FAVOUR EZINNE', '2013/188431', 'Electronic Engineering', '025a8ece3c398c85cbe39dc01f243a3166525832', NULL, NULL),
(102, 'UGROJI JAMES CHIBUEZE', '2013/189912', 'Electronic Engineering', '81fac71ac5f5b639d796aa47d0d5a7dd1d5ecf5e', NULL, NULL),
(103, 'UGWOKE CALEB ONYEDIKACHI', '2013/188065', 'Electronic Engineering', 'ff24a99fb9c755179f682e953b45e0ed83c426a9', NULL, NULL),
(104, 'UGWOKE TOCHUKWU', '2013/187464', 'Electronic Engineering', '2e2abf5fc678ee9eda00bc432a208cd5cbb027d2', NULL, NULL),
(105, 'UGWU GEORGE CHIJIOKE', '2013/188073', 'Electronic Engineering', '52424fa6e8d1f861662cc71c5228d29c5c67ac26', NULL, NULL),
(106, 'UGWU NNADOZIE EBERE', '2013/187443', 'Electronic Engineering', '717148560e8714c604178f2c4a31e34032eb6a90', NULL, NULL),
(107, 'UGWU NNAMDI KELVIN', '2013/188091', 'Electronic Engineering', '8f98c6626cf50d065d8ff592b20da148709f9954', NULL, NULL),
(108, 'UGWUOKPE KINGSLEY.N', '2013/190511', 'Electronic Engineering', 'db163679b263beab465070c64ab039f9d067b67c', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `added_courses`
--
ALTER TABLE `added_courses`
  ADD PRIMARY KEY (`added_id`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`attendance_id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`course_id`);

--
-- Indexes for table `generated_qr`
--
ALTER TABLE `generated_qr`
  ADD PRIMARY KEY (`qr_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `added_courses`
--
ALTER TABLE `added_courses`
  MODIFY `added_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `attendance_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `course_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `generated_qr`
--
ALTER TABLE `generated_qr`
  MODIFY `qr_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
