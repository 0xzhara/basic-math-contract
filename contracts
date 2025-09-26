// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title BasicMath - Kontrak sederhana untuk operasi matematika dasar
/// @author ...
/// @notice Contoh kontrak untuk belajar Solidity & Hardhat
contract BasicMath {
    uint256 public lastResult;

    /// @notice Menjumlahkan dua angka
    /// @param a angka pertama
    /// @param b angka kedua
    /// @return hasil penjumlahan
    function add(uint256 a, uint256 b) public returns (uint256) {
        lastResult = a + b;
        return lastResult;
    }

    /// @notice Mengurangkan dua angka
    /// @param a angka pertama
    /// @param b angka kedua
    /// @return hasil pengurangan
    function subtract(uint256 a, uint256 b) public returns (uint256) {
        require(b <= a, "Underflow!");
        lastResult = a - b;
        return lastResult;
    }
}
