-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 01, 2018 lúc 01:24 PM
-- Phiên bản máy phục vụ: 10.1.31-MariaDB
-- Phiên bản PHP: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `dbproject`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nameproduct`
--

CREATE TABLE `nameproduct` (
  `idName` int(11) NOT NULL,
  `name` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `nameproduct`
--

INSERT INTO `nameproduct` (`idName`, `name`) VALUES
(1, 'GIÀY'),
(2, 'TÚI XÁCH'),
(3, 'BALO'),
(4, 'DÉP & GUỐC'),
(5, 'PHỤ KIỆN'),
(6, 'NEW ARRIVAL'),
(7, 'SALE OFF');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `img` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `price` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `idType` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `img`, `price`, `idType`) VALUES
(1, 'Giày Bít Gót Vuông BMT\r\n0449 - Màu Be', 'hinh-1.jpg', '445000', 1),
(2, 'Giày Bít Gót Vuông BMT\r\n0449 - Màu Đen', 'hinh-2.jpg', '445000', 1),
(3, 'Giày Sandal Đế Bệt SDK 0269 - Màu Trắng', 'hinh-3.jpg', '425000', 1),
(4, 'Giày Sandal Đế Bệt SDK 0269 - Màu Nâu', 'hinh-4.jpg', '425000', 1),
(5, 'Guốc Gót Vuông GNN 0124 - Màu Xanh Lá Đậm', 'hinh-5.jpg', '545000', 1),
(6, 'Guốc Gót Vuông \r\nGNN 0124 - Màu Xanh Navy', 'hinh-6.jpg', '545000', 1),
(7, 'Guốc Gót Vuông \r\nGNN 0124 - Màu Đen', 'hinh-7.jpg', '545000', 1),
(8, 'Giày Bít Gót \r\nVuông BMN 0268 - Màu Nâu Sáng', 'hinh-8.jpg', '525000', 1),
(9, 'Giày Bít Gót \r\nVuông BMN 0268 - Màu Trắng', 'hinh-9.jpg', '525000', 1),
(10, 'Giày Bít Gót \r\nVuông BMN 0268 - Màu Đen', 'hinh-10.jpg', '525000', 1),
(11, 'Giày Bít Gót Vuông BMT\r\n0448 - Màu Be', 'hinh-11.jpg', '525000', 1),
(12, 'Giày Bít Gót Vuông BMT\r\n0448 - Màu Be', 'hinh-11.jpg', '525000', 1),
(13, 'Giày Bít Gót Vuông BMT\r\n0448 - Màu Be', 'hinh-11.jpg', '525000', 1),
(14, 'Giày Bít Gót Vuông BMT\r\n0448 - Màu Be', 'hinh-11.jpg', '525000', 1),
(15, 'Giày Bít Gót Vuông BMT\r\n0448 - Màu Be', 'hinh-11.jpg', '525000', 1),
(16, 'Giày Bít Gót Vuông BMT\r\n0448 - Màu Be', 'hinh-11.jpg', '525000', 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `nameproduct`
--
ALTER TABLE `nameproduct`
  ADD PRIMARY KEY (`idName`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `nameproduct`
--
ALTER TABLE `nameproduct`
  MODIFY `idName` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
